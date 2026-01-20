from sqlalchemy import Column, String, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid 
from datatime import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=True) #Null for OAuth users
    full_name = Column(String(255), nullable=False)
    auth_provider = Column(String(50), default="email")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    #Relationships
    onboarding = relationship("OnboardingData", back_populates="user", uselist=False)
    routines = relationship("Routine", back_populates="user")
    task_executions = relationship("TaskExecution", back_populates="user")
    weekly_reports = relationship("WeeklyReport", back_populates="user")