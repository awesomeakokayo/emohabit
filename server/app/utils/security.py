from datetime import datetime, timedelta
from jose import jwt, JWTError
from passlib.context import CryptContext
from app.config import settings
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
def create_access_token(user_id: str, expires_delta: timedelta = None) -> str:
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    payload = {
        "sub": user_id,
        "type": "access",
        "iss": "navipro-api",
        "aud": "navipro-client",
        "iat": datetime.utcnow(),
        "exp": expire
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
def create_refresh_token(user_id: str) -> str:
    expire = datetime.utcnow() + timedelta(days=30)
    payload = {
        "sub": user_id,
        "type": "refresh",
        "iss": "navipro-api",
        "aud": "navipro-client",
        "iat": datetime.utcnow(),
        "exp": expire
    }
    return jwt.encode(payload, settings.REFRESH_SECRET_KEY, algorithm="HS256")
    
def verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)
def hash_password(password: str) -> str:
    return pwd_context.hash(password)