from fastapi import APIRouter
from app.db import supabase_admin

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/sync-user")
def sync_user(user: dict):
    """
    Called after client login to ensure user exists in DB.
    """
    user_id = user["sub"]
    email = user.get("email")

    supabase_admin.table("users").upsert({
        "id": user_id,
        "email": email,
    }).execute()

    return {"status": "ok"}
