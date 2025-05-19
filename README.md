# 🎓 Universal Learning Buddy

![MERN Stack](https://img.shields.io/badge/Stack-MERN%2BFlask-blue) ![License MIT](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🚀 Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Architecture & Tech Stack](#architecture--tech-stack)
4. [Demo & Screenshots](#demo--screenshots)
5. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the App](#running-the-app)
6. [Usage Guide](#usage-guide)
   - [Student Portal](#student-portal)
   - [Teacher Portal](#teacher-portal)
   - [Universal Buddy Chatbot](#universal-buddy-chatbot)
   - [Voice-to-Text Study Notes](#voice-to-text-study-notes)
   - [Student Progress Tracker](#student-progress-tracker)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [Credits & Acknowledgements](#credits--acknowledgements)
10. [License](#license)

---

## 🌟 Project Overview

**Universal Learning Buddy** is an all‑in‑one virtual assistant designed to empower students and teachers alike. Built for hackathon glory, our platform provides:

- Personalized one‑on‑one study support
- Real‑time Q&A powered by Google's Gemini LLM
- Intuitive voice‑to‑text note‑taking
- Dedicated Student & Teacher portals
- Comprehensive student progress tracking

Whether you're cramming for finals or crafting lesson plans, the Universal Learning Buddy has your back!

---

## 🔑 Key Features

| Feature | Description |
|---------|-------------|
| 🧑‍🎓 **Student Portal** | Dashboard for study schedules, learning resources, and chat access with the AI tutor. |
| 👩‍🏫 **Teacher Portal** | Manage classes, assign tasks, and monitor student progress seamlessly. |
| 🤖 **Gemini‑Powered Chatbot** | Interactive chatbot for instant explanations, examples, and concept clarifications. |
| 🎙️ **Voice‑to‑Text Notes** | Speak your study notes; our system transcribes and organizes them automatically. |
| 📊 **Student Progress Tracker** | Visualize performance trends, completed tasks, and areas needing improvement. |
| 🔒 **Secure Authentication** | Role‑based access for students and teachers, powered by JWT and secure session management. |
| 🌐 **Responsive Design** | Mobile‑first layout ensures on‑the‑go learning for every device. |

---

## 🏗️ Architecture & Tech Stack

```ascii
┌────────────────────────┐     ┌─────────────────────┐
│      React + Redux     │◀────▶│     Express.js    │
│ (Student & Teacher UI) │     └─────────────────────┘
└────────────────────────┘             │
                                       ▼
                               ┌────────────────────────┐
                               │       Flask API        │
                               │ (LLM Proxy & TTS/STT)  │
                               └────────────────────────┘
                                       │
                                       ▼
                               ┌────────────────┐
                               │  Google Gemini │
                               │      API       │
                               └────────────────┘
```

### Tech Stack Details

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**:
  - **Node/Express**: RESTful API, authentication, business logic
  - **Flask**: LLM proxy, voice‑to‑text & text‑to‑speech integration
- **Database**: MongoDB (user data, notes, tracker logs)
- **LLM Integration**: Google Gemini API
- **Voice Processing**: Browser Web Speech API + Flask‑powered transcription

---

## 🎬 Demo & Screenshots

| Student Portal | Teacher Portal | AI Chatbot |
|----------------|----------------|------------|
| ![Student Dashboard](./docs/student-dashboard.png) | ![Teacher Dashboard](./docs/teacher-dashboard.png) | ![Chatbot](./docs/chatbot.png) |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn
- Python 3.8+
- MongoDB instance (local or cloud)
- Google Cloud credentials for Gemini API access

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-org/universal-learning-buddy.git
   cd universal-learning-buddy
   ```

2. **Install dependencies**

   Backend (Express):
   ```bash
   cd backend
   npm install
   ```

   Flask (LLM & STT/TTS):
   ```bash
   cd ../llm-proxy
   pip install -r requirements.txt
   ```

   Frontend (React):
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in each service folder:

#### backend/.env
```env
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

#### llm-proxy/.env
```env
FLASK_ENV=development
GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/google-creds.json
GEMINI_API_ENDPOINT=https://gemini.googleapis.com/v1/chat/completions
```

#### frontend/.env
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STT_URL=http://localhost:8000
```

### Running the App

1. **Start MongoDB**
   ```bash
   mongod --config /usr/local/etc/mongod.conf
   ```

2. **Launch Express API**
   ```bash
   cd backend
   npm start
   ```

3. **Launch Flask LLM Proxy**
   ```bash
   cd ../llm-proxy
   flask run --port=8000
   ```

4. **Launch React Frontend**
   ```bash
   cd ../frontend
   npm start
   ```

Open your browser and go to `http://localhost:3000`

---

## 📖 Usage Guide

### Student Portal
- Sign up / Sign in as a Student
- View your personalized dashboard with study plans and tasks
- Chat with the Universal Learning Buddy for instant help
- Record voice notes; they'll be transcribed and saved in your notes

### Teacher Portal
- Sign up / Sign in as a Teacher
- Create classes, upload resources, and assign tasks
- Track student progress with interactive charts and logs

### Universal Buddy Chatbot
- Available in both portals via the chat widget
- Powered by Google Gemini: answers questions, generates examples, quizzes you

### Voice‑to‑Text Study Notes
- Click the microphone icon to start recording
- Speak your notes; real-time transcription is organized automatically
- Edit, tag, and organize transcripts in your notes section

### Student Progress Tracker
- Visualize completed tasks, quiz scores, and study duration
- Filter by date range, subject, and class
- Export reports as CSV or PDF

---

## 🚧 Roadmap
- [ ] Core MERN + Flask integration
- [ ] Gemini‑powered chatbot
- [ ] Voice‑to‑text note taking
- [ ] Student & Teacher portals
- [ ] Real‑time progress tracker
- [ ] Peer‑to‑peer study groups
- [ ] Gamification & achievement badges
- [ ] Multilingual support

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Add awesome feature"
   ```
4. Push to your branch
   ```bash
   git push origin feature/my-awesome-feature
   ```
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## 🙌 Credits & Acknowledgements
- Team HackLearn — Alice, Bob, Carol & Dave
- Google Cloud for Gemini API
- MongoDB for open‑source support
- Inspiration from freeCodeCamp tutorials

---

## 📄 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

> "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
