# 🤖 GenAI Chatbot – Hitesh Cohort Project

Welcome to my **GenAI Chatbot Project**, built as part of **Hitesh Choudhary's Generative AI Cohort**.  
This project demonstrates how to build an intelligent chatbot using a modern full-stack tech stack and LLM APIs.

---

## 🚀 Demo

> 🔗 **Live Demo**: https://flask-to-do-kcw6.onrender.com/

---

## 📌 Features

- [x] Chat interface powered by a large language model (GPT or compatible)
- [x] Modern UI built with React and TailwindCSS
- [x] FASTAPI backend for handling API requests
- [x] Prompt engineering support
- [x] Error handling and loader states
- [x] Easily extendable and customizable

---

## 🛠️ Tech Stack

**Frontend**
- React.js (with Vite)
- TailwindCSS
- Axios

**Backend**
- Python
- FastAPI
- dotenv

**AI / LLM Integration**
- Gemini Api

---

## 📁 Folder Structure

```bash
genai-cohort/
├── backend/
│   ├── app.py
│   ├── HiteshchatBot_gemini.py
│   ├── requirements.txt
│   ├── Procfile
│   ├── render.yaml
│   └── start.sh
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```
---

## 🔧 Installation & Running Locally

### 🧩 Backend (Python + Gemini)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Ensure you have a .env file with your Gemini API Key:
<pre lang="markdown"> ``` GOOGLE_API_KEY=your_google_gemini_api_key ``` </pre>

### 🌐 Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```
Make Sure your axios base url points to the correct backend port
```js
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',  
});
```

## ⚙️ Deployment
- This repo is ready to deploy using Render:

- Backend: render.yaml, Procfile, and start.sh

- Frontend: Deploy via Vercel or Netlify (npm run build)

## 🔮 Prompt Engineering
- You can customize the chatbot behavior in HiteshchatBot_gemini.py by modifying how you call the Gemini API and what prompt you provide.

## 📌 To-Do / Improvements
 - [ ] Add user authentication (optional)

 - [ ] Store chat history in a database

 - [ ] Improve error handling and UI feedback

 - [ ] Add support for other LLMs (OpenAI, Claude)
