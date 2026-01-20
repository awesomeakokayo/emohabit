from datetime import datetime
from uuid import UUID
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.models.task import Task, TaskExecution


class TaskTracker:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def start_task(self, task_id: UUID, user_id: UUID) -> TaskExecution:
        """
        Start tracking a task for a user.
        Rules:
        - Task must exist
        - User cannot have another active execution for the same task
        """

        # 1. Validate task exists
        task = await self.db.get(Task, task_id)
        if not task:
            raise ValueError("Task does not exist")

        # 2. Prevent duplicate active executions
        result = await self.db.execute(
            select(TaskExecution).where(
                TaskExecution.task_id == task_id,
                TaskExecution.user_id == user_id,
                TaskExecution.status == "active"
            )
        )
        active_execution = result.scalar_one_or_none()

        if active_execution:
            raise ValueError("Task is already active")

        # 3. Create execution
        execution = TaskExecution(
            task_id=task_id,
            user_id=user_id,
            execution_date=datetime.utcnow().date(),
            status="active",
            started_at=datetime.utcnow()
        )

        self.db.add(execution)
        await self.db.commit()
        await self.db.refresh(execution)

        return execution

    async def complete_task(
        self,
        execution_id: UUID,
        notes: str | None = None
    ) -> TaskExecution:
        """
        Complete an active task execution.
        Rules:
        - Execution must exist
        - Execution must be active
        """

        execution = await self.db.get(TaskExecution, execution_id)

        if not execution:
            raise ValueError("Task execution not found")

        if execution.status != "active":
            raise ValueError("Only active tasks can be completed")

        completed_at = datetime.utcnow()

        execution.completed_at = completed_at
        execution.status = "completed"
        execution.time_spent_seconds = (
            completed_at - execution.started_at
        ).total_seconds()
        execution.notes = notes

        await self.db.commit()
        await self.db.refresh(execution)

        return execution

    async def log_interruption(
        self,
        execution_id: UUID,
        app_name: str | None = None,
        duration_seconds: int | None = None
    ) -> None:
        """
        Log an interruption during an active task.
        Rules:
        - Execution must exist
        - Execution must be active
        - Duration must be positive if provided
        """

        execution = await self.db.get(TaskExecution, execution_id)

        if not execution:
            raise ValueError("Task execution not found")

        if execution.status != "active":
            raise ValueError("Cannot log interruptions for inactive tasks")

        if duration_seconds is not None and duration_seconds <= 0:
            raise ValueError("Interruption duration must be positive")

        interruptions = execution.interruptions or []

        interruptions.append({
            "timestamp": datetime.utcnow().isoformat(),
            "app_name": app_name,
            "duration_seconds": duration_seconds
        })

        execution.interruptions = interruptions

        await self.db.commit()