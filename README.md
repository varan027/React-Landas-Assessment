# LANDAS - React Frontend Assessment Project

## 📌 Overview
This project is my submission for the **Frontend Developer Assessment** at **SecondChapter**.  

It is a **React + TypeScript** single-page application (SPA) built with **Atomic Design principles** and demonstrates:

- Atomic Design (`atoms`, `molecules`, `organisms`)  
- Responsive UI for desktop and mobile  
- Authentication with login simulation  
- State management using **Zustand**  
- Routing with **React Router v6**  
- SPA deployment with proper `404` redirect  

🌐 **Live Demo:** https://landas-frontend.vercel.app/
📂 **GitHub Repo:** https://github.com/varan027/React-Landas-Assessment 

---

## 🛠️ Tech Stack
- **React + TypeScript**  
- **TailwindCSS** → for responsive, modern UI  
- **React Router v6** → for client-side routing  
- **Zustand** → lightweight state management for auth  
- **Vite** → fast bundler and dev server  

---

## ⚙️ Installation & Execution

### 1️⃣ Clone the repo
```bash
git clone https://github.com/varan027/React-Landas-Assessment
cd React-Landas-Assessment
yarn install
yarn dev
yarn build 

---

📂 Project Structure

src/
 ┣ assets/          # Images, icons, static assets
 ┣ data/            # Static/mock data
 ┣ features/        
 ┃ ┣ auth/          # Authentication (Login, Zustand store, services)
 ┃    ┗ components/  # Atoms, Molecules, Organisms for auth
 ┃      ┣ atoms
 ┃      ┣ molecules
 ┃      ┗ organisms
 ┃ ┗ home/          # Homepage components
 ┃   ┗ components/  # Atoms, Molecules, Organisms for home
 ┃      ┣ atoms
 ┃      ┣ molecules
 ┃      ┗ organisms
 ┣ hooks/           # Reusable custom hooks
 ┣ pages/           # Page-level components (LoginPage, HomePage)
 ┣ shared/          
 ┃ ┣ components/    # Shared UI elements (buttons, inputs)
 ┃ ┣ services/      # API service layer (authService.ts)
 ┃ ┣ stores/        # Global Zustand stores
 ┃ ┗ utils/         # Utility/helper functions
 ┣ App.tsx          # App entry, routes
 ┣ main.tsx         # ReactDOM entry
 ┣ index.css        # Global styles
```
---

## 📝 Implementation Assumptions & Decisions

- Authentication is mocked → authService.ts simulates login with a hardcoded user.

- Evaluator credentials:
  ```bash
  Username: admin
  Password: 1234
  ```
- Zustand with persist middleware was chosen for simplicity instead of Redux.

- TailwindCSS was used for responsive UI rather than writing raw CSS.

- Routing assumes SPA deployment with index.html fallback (404 redirect rule applied).

---

## 📌 Optional Libraries

- Zustand → Chosen over Redux for simplicity and smaller boilerplate.

- TailwindCSS → Faster development, consistent spacing, and responsive classes.

- React Router v6 → Clean and modern routing system with hooks support.
