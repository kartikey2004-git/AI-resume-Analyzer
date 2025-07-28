# 📄 AI Resume Analyzer

A lightweight browser-based web app that lets users upload resumes and job descriptions, then receive AI-powered insights and a concise summary using **Puter.js**—no backend servers required.

---

## 🚀 What It Does

- Upload your resume (PDF or text) to store locally using Puter.js  
- Provide a job title or description to tailor analysis  
- Get an **ATS score**, summary of skills, tone & structure, and improvement tips powered by GPT/Claude through Puter.js cloud AI  
- Secure, user-contained file storage and authentication built into your browser session

---

## 🧠 Why I Built It

- Inspired by tutorials like JavaScript Mastery’s AI resume analyzer using Puter.js, I wanted an app that works completely client-side—upload, analyze, store, and view feedback without spinning up a server or backend infrastructure. It uses Puter.js to authenticate users, store files, and execute AI calls in-browser ..

---

## ✅ Core Features

- File upload and secure storage via Puter.js  
- GPT-powered resume evaluation and summary  
- ATS-like scoring and structured feedback for improvement  
- Secure sign-in, user-specific data, and preference handling—all client‑side

---

## 🛠 Setup & Run

```bash
git clone https://github.com/kartikey2004-git/AI-resume-Analyzer.git
cd AI-resume-Analyzer
npm install
npm run dev
```

Then open in browser (usually at http://localhost:5173) and authenticate via Puter.js. You don’t need to manage API keys or backend.

### 🎯 What I Learned
- How Puter.js powers frontend-only AI apps: authentication, file system, AI calls—completely serverless 

- How to build a smooth UI for resume input, feedback, and ATS scoring

- How to prompt GPT/Claude effectively for structured resume analysis

- How to manage user sessions and clean data using Puter.js APIs

### 🔭 What’s Next
- Add functionality to analyze multiple resumes and track history

- Enable export of improved summaries (PDF or markdown)

- Support email-based resume submission or integration with job APIs

- Add more insights: job-fit percentage, role-based suggestions, phrasing improvement

- Polish UI transitions and add download/share options


----
Ready to optimize resumes on the fly?
This app brings AI résumé insight right into your browser—simple, secure, and serverless.
