# MERN Notes App

## 🌟 Project Overview
A **full-stack Notes App** where users can register, login, and manage personal notes (create, view, edit, delete). Built with **React frontend** and **Node.js/Express + MongoDB backend**, featuring **JWT authentication** and responsive UI.  

---

## 🎥 Live Demo & Video
- **Frontend (Vercel):** [https://notes-frontend.vercel.app](https://fullstack-notes-app-five.vercel.app/)  
- **Backend (Render):** [https://notes-backend.onrender.com](https://fullstack-notes-app-1-7cja.onrender.com)  
- **video Demo :**  https://drive.google.com/drive/folders/19BwJqnuJQkD_158QCwIWK6UWZ6yIORPe?usp=sharing
---

## 🗂 Project Folder Structure
notes-app/
├─ backend/ # Node.js + Express API
│ ├─ config/db.js # MongoDB connection
│ ├─ models/ # Mongoose models (User, Note)
│ ├─ routes/ # API routes (auth, notes)
│ ├─ middleware/ # JWT authentication
│ ├─ server.js # Entry point
│ └─ .env # Environment variables (ignored in Git)
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ components/ # Navbar, reusable UI components
│ │ ├─ pages/ # Login, Register, Dashboard
│ │ ├─ App.js
│ │ └─ index.js
│ ├─ package.json
│ └─ .env # Environment variables (API URLs)
├─ .gitignore
└─ README.md



---

## 🛠 Tech Stack
- **Frontend:** React, React Router, Axios, HTML/CSS  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Token)  
- **Deployment:** Vercel (frontend), Render (backend)  

---

## ⚡ Features
- User registration & login with JWT authentication  
- Add, view, edit, and delete notes  
- Responsive UI with React  
- Separate backend API with secure routes  

---
Setup Backend

cd backend
npm install
# Add your .env variables (MONGO_URI, JWT_SECRET)
npm run server


Setup Frontend

cd ../frontend
npm install
npm start

👨‍💻 Author

Navadeep Reddy

GitHub: https://github.com/Navadeep9252

Email: karkondareddy1@gmail.com
