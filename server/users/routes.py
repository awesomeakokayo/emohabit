from fastapi import APIRouter, Depends
from app.auth.deps import get_current_user

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me")
def get_me(current_user=Depends(get_current_user)):
    return {
        "id": current_user["sub"],
        "email": current_user.get("email")
    }
