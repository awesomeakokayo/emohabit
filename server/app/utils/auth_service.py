from authlib.integrations.starlette_client import OAuth
from app.config import settings
from google.oauth2 import id_token as google_id_token
from google.auth.transport import requests
from jose import JWTError

oauth = OAuth()

oauth.register(
    name="google",
    client_id=settings.GOOGLE_CLIENT_ID,
    client_secret=settings.GOOGLE_CLIENT_SECRET,
    access_token_url="https://oauth2.googleapis.com/token",
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    api_base_url="https://www.googleapis.com/oauth2/v1/",
    client_kwargs={"scope": "openid email profile"},
)

async def verify_google_token(id_token: str) -> dict:
    try:
        idinfo = google_id_token.verify_oauth2_token(
            id_token,
            requests.Request(),
            settings.GOOGLE_CLIENT_ID,
        )

        # Explicit issuer check
        if idinfo.get("iss") not in (
            "accounts.google.com",
            "https://accounts.google.com",
        ):
            raise ValueError("Invalid token issuer")

        # Email must be verified
        if not idinfo.get("email_verified"):
            raise ValueError("Email not verified")

        return {
            "email": idinfo["email"],
            "name": idinfo.get("name"),
            "picture": idinfo.get("picture"),
            "provider": "google",
        }

    except Exception as e:
        # Log internally, raise clean auth error
        raise ValueError("Invalid Google authentication token")
