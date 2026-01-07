from fastapi import FastAPI

app = FastAPI(title="EmoHabit API")

@app.get("/health")
def health():
    return {"status": "ok"}
