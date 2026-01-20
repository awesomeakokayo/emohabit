from pydantic_settings import BaseSettings
from typing import Optional
class Settings(BaseSettings):
    # Supabase
    SUPABASE_URL: str
    SUPABASE_ANON_KEY: str
    SUPABASE_SERVICE_ROLE_KEY: str
    
    # Auth
    JWT_AUDIENCE: str = "authenticated"
    SECRET_KEY: str = "change-me-in-production"
    
    # AI (optional)
    OPENAI_API_KEY: Optional[str] = None
    
    # App
    DEBUG: bool = False
    ALLOWED_ORIGINS: str = "*"
    class Config:
        env_file = ".env"
settings = Settings()