# EmoHabit 🧠⏱️

**EmoHabit** is a smart routine and habit management mobile app designed to help users plan their day, stay focused, and reflect on how they actually spend their time — with guidance from **Emo**, a friendly routine master.

Unlike basic habit trackers, EmoHabit focuses on **structured routines**, **time awareness**, and **weekly reflection**, helping users build consistency without being rigid or invasive.

---

## ✨ Core Features

### 🧭 Smart Routine Creation
- Guided onboarding to understand sleep, wake times, goals, and availability
- Auto-generated daily routines based on user inputs
- Custom routine creation with time blocks, priorities, and repeat rules

### 🤖 Emo — Your Routine Guide
- Emo reviews and refines routines before activation
- Suggests healthier sleep windows and better task distribution (with user approval)
- Provides gentle check-ins during active tasks

### ⏱️ Task Execution & Tracking
- Start / Active / Done task states
- Tracks time spent per task
- Detects app switching during active tasks (with permission)
- Asks context-aware follow-up questions (e.g. “Did you complete this offline?”)

### 📊 Weekly Reports & Insights
- Auto-generated weekly performance summaries
- Time used vs. time wasted visualization
- Goal completion probability indicator
- Actionable micro-suggestions (accept, reject, or customize)

### 🔐 Privacy-First by Design
- Transparent permission prompts
- No forced behavior changes
- User stays in control of adjustments and tracking depth

---

## 🛠️ Tech Stack

### Mobile App
- **React Native (Expo)**
- **TypeScript**
- **NativeWind (Tailwind for React Native)**
- Expo Router / React Navigation

### Backend
- **FastAPI**
- Python 3.10+
- REST API architecture
- JWT authentication (planned)

### Design
- Figma (UI/UX)
- Custom vector-based Emo character

---

## 📁 Project Structure



emohabit/
│
├── mobile/ # React Native Expo application
│ ├── app/
│ ├── assets/
│ ├── components/
│ ├── package.json
│ └── README.md
│
├── server/ # FastAPI backend
│ ├── app/
│ │ ├── api/
│ │ ├── models/
│ │ ├── schemas/
│ │ └── main.py
│ ├── requirements.txt
│ └── README.md
│
├── docs/ # PRD, flowcharts, design notes
│
├── .gitignore
├── README.md
└── LICENSE


---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- Python (3.10+)
- Expo CLI
- Git

---

### 📱 Mobile App (Expo)

```bash
cd mobile
npm install
npm start


Scan the QR code using Expo Go or run on an emulator.

🖥️ Backend (FastAPI)
cd server
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload


API Docs:

Swagger UI → http://127.0.0.1:8000/docs

Health Check → /health

🔐 Authentication (Planned)

Email & Password

Google Sign-In

Apple Sign-In

Persistent sessions on mobile

🗺️ Roadmap (MVP → Launch)
MVP (by March 31)

Authentication & onboarding flow

Routine generation & editing

Task execution tracking

Weekly reports

Basic payment integration

Post-MVP

Advanced analytics

Cross-device sync

Gamification elements

Cloud sync & backups

🎨 Design Philosophy

Minimal UI (Black · White · Orange)

Calm, non-judgmental copy

Emo acts as a guide, not a dictator

Clarity over complexity

🧠 Why EmoHabit?

Most habit apps track what you did.
EmoHabit helps you understand why, when, and how well — and whether your routine actually supports your goals.

📜 License

This project is licensed under the MIT License.

🙋 Author

Built solo with care and discipline.
Designed for people who want structure — without pressure.

EmoHabit — build better days, one routine at a time.
