from sqlalchemy import Column, String, Boolean, DateTime, Date, ForeignKey, Time, Integer, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from datatime import datatime
from app.database import Base

class Routine(Base):
    __tablename__ = "routines"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    name = Column(String(255), default="Daily Routine")
    effective_date = Column(Date, nullable=False)
    is_active = Column(Boolean, default="Daily Routine")
    emo_approved = Column(Boolean, default=False) #Emo reviewdd this routine
    created_at = Column(DateTime, default=datetime.utcnow)

    #Relationships
    user = relationship("User", back_populates="routines")
    tasks = relationship("Task", back_populates="routines", cascade="all, delete-orphan")


class Task(Base):
    __tablename__ = "tasks"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    routine_id = Column(UUID(as_uuid=True), ForeignKey("routines.id"), nullable=False)
    title = Column(String(255), nullable=False)
    category = Column(String(255), nullable=False) # deep_work, fitness, learning, mental_health
    icon = Column(String(50), nullable=True) #icon or emoji column
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    priority = Column(Integer, default=1)
    repeat_rules = Column(JSON, nullable=True)

    #Relationships
    routine = relationship("Routine", back_populates="tasks")
    executions = relationship("TaskExecution", back_populates="task")
