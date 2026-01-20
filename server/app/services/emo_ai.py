import json
from typing import Dict, Any, Optional
from datetime import datetime
from openai import AsyncOpenAI
from pydantic import BaseModel, ValidationError, Field
import asyncio


class RoutineReviewResponse(BaseModel):
    approved: bool
    suggestions: list[str] = Field(default_factory=list)

class EmoAI:
    """
    Emo is EmoHabit's friendly routine guide.

    Responsibilities:
    - Generate suggestions (not decisions)
    - Keep tone supportive and concise
    - Never mutate application state
    """

    SYSTEM_PROMPT = """
    You are Emo, a friendly routine guide in the EmoHabit app.

    Personality traits:
    - Warm and encouraging
    - Never guilt or shame users
    - Make practical, specific suggestions
    - Celebrate small wins
    - Respect user's final decisions

    Rules:
    - Keep responses concise
    - Follow requested formats exactly
    - Never invent metrics
    """

    def __init__(self, api_key: str):
        # Async client prevents blocking the event loop
        self.client = AsyncOpenAI(api_key=api_key)

    async def _safe_completion(self, messages: list[dict], timeout: int = 10) -> str:
        """
        Execute an AI request safely:
        - Timeout protected
        - Exception guarded
        - Always returns a string
        """
        try:
            response = await asyncio.wait_for(
                self.client.chat.completions.create(
                    model="gpt-4o-mini",
                    messages=messages,
                ),
                timeout=timeout
            )
            return response.choices[0].message.content or ""

        except Exception:
            # Never let AI failure crash the app
            return ""

    async def review_routine(self, routine_data: Dict[str, Any]) -> RoutineReviewResponse:
        """
        Review a routine and suggest improvements.

        Guarantees:
        - Always returns a valid RoutineReviewResponse
        - Never raises due to AI failure
        """

        messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": f"""
            Review this routine and suggest 1–2 improvements.

            Wake time: {routine_data.get("wake_time")}
            Sleep time: {routine_data.get("sleep_time")}
            Tasks: {routine_data.get("tasks")}

            Return valid JSON only:
            {{
                "approved": boolean,
                "suggestions": [string]
            }}
            """}
        ]

        raw_output = await self._safe_completion(messages)

        try:
            parsed = json.loads(raw_output)
            return RoutineReviewResponse(**parsed)
        except (json.JSONDecodeError, ValidationError):
            # Safe fallback
            return RoutineReviewResponse(
                approved=True,
                suggestions=[]
            )

    async def generate_check_in(
        self,
        task_name: str,
        elapsed_minutes: int
    ) -> str:
        """
        Generate a gentle check-in message during a task.

        Guarantees:
        - Max length enforced by prompt
        - Fallback message always available
        """

        messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": f"""
            User has been working on "{task_name}" for {elapsed_minutes} minutes.
            Generate a brief, encouraging check-in message.
            Max 15 words.
            """}
        ]

        output = await self._safe_completion(messages)

        return output.strip() or "You're doing well — keep going at your own pace."

    async def generate_weekly_message(self, report: Dict[str, Any]) -> str:
        """
        Generate a personalized weekly summary message.
        """

        completion_rate = int(report.get("completion_rate", 0) * 100)

        if completion_rate >= 80:
            tone = "celebratory"
        elif completion_rate >= 50:
            tone = "encouraging"
        else:
            tone = "supportive and understanding"

        messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": f"""
            Generate a {tone} weekly summary message.

            Completion rate: {completion_rate}%
            Total tasks: {report.get("total_tasks")}
            Completed tasks: {report.get("completed_tasks")}

            Keep it to 2–3 sentences.
            """}
        ]

        output = await self._safe_completion(messages)

        return output.strip() or "Every week is progress. Take note of what worked and keep going."
