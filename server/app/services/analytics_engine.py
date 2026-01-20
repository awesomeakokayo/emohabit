from datetime import date, timedelta, datetime
from typing import Dict, Any, List
from uuid import UUID

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.models.task import TaskExecution, Task


class AnalyticsEngine:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_weekly_summary(
        self,
        user_id: UUID,
        week_start: date
    ) -> Dict[str, Any]:
        week_end = week_start + timedelta(days=6)

        executions = await self._get_week_executions(
            user_id, week_start, week_end
        )

        if not executions:
            return self._empty_report(week_start)

        total_tasks = len(executions)
        completed_tasks = sum(1 for e in executions if e.status == "completed")

        total_planned_seconds = 0
        total_actual_seconds = 0
        by_category: Dict[str, Dict[str, int]] = {}

        for e in executions:
            task = e.task
            cat = task.category

            planned_seconds = self._planned_seconds(
                task.start_time,
                task.end_time,
                e.execution_date
            )

            actual_seconds = e.time_spent_seconds or 0

            if cat not in by_category:
                by_category[cat] = {
                    "planned": 0,
                    "actual": 0,
                    "completed": 0,
                }

            by_category[cat]["planned"] += planned_seconds
            by_category[cat]["actual"] += actual_seconds

            if e.status == "completed":
                by_category[cat]["completed"] += 1

            total_planned_seconds += planned_seconds
            total_actual_seconds += actual_seconds

        insights = self._generate_insights(executions, by_category)
        suggestions = await self._generate_suggestions(user_id, insights)

        return {
            "week_start": week_start,
            "total_tasks": total_tasks,
            "completed_tasks": completed_tasks,
            "completion_rate": completed_tasks / total_tasks,
            "time_planned_minutes": total_planned_seconds / 60,
            "time_used_minutes": total_actual_seconds / 60,
            "efficiency_score": min(
                total_actual_seconds / total_planned_seconds, 1.0
            ),
            "by_category": by_category,
            "insights": insights,
            "suggestions": suggestions,
        }

    async def _get_week_executions(
        self,
        user_id: UUID,
        start: date,
        end: date,
    ) -> List[TaskExecution]:
        stmt = (
            select(TaskExecution)
            .join(Task)
            .where(
                TaskExecution.user_id == user_id,
                TaskExecution.execution_date.between(start, end),
            )
        )
        result = await self.db.execute(stmt)
        return result.scalars().all()

    def _planned_seconds(self, start, end, day: date) -> int:
        start_dt = datetime.combine(day, start)
        end_dt = datetime.combine(day, end)
        return int((end_dt - start_dt).total_seconds())

    def _empty_report(self, week_start: date) -> Dict[str, Any]:
        return {
            "week_start": week_start,
            "total_tasks": 0,
            "completed_tasks": 0,
            "completion_rate": 0,
            "time_planned_minutes": 0,
            "time_used_minutes": 0,
            "efficiency_score": 0,
            "by_category": {},
            "insights": [],
            "suggestions": [],
        }

    def _generate_insights(self, executions, by_category) -> list:
        insights = []

        if by_category.get("deep_work", {}).get("completed", 0) < 3:
            insights.append({
                "type": "warning",
                "message": "You completed fewer deep work sessions than planned this week."
            })

        interrupted = [
            e for e in executions
            if e.interruptions and len(e.interruptions) > 3
        ]

        if interrupted:
            insights.append({
                "type": "observation",
                "message": f"{len(interrupted)} tasks had frequent interruptions."
            })

        return insights
