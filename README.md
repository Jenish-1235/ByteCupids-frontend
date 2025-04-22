# ByteCupids Frontend

**ByteCupids** — *Connecting hearts with machines.*  
An interactive Virtual OS Lab platform designed to help users learn and explore computer systems, OS fundamentals, Linux internals, and system programming through immersive labs and visual simulations.

This repository contains the **frontend** codebase for the ByteCupids project, built with **React.js** and **TypeScript**, following a clean architecture and modular design.

---

## 🌌 Features

- 📚 Interactive OS Lab modules  
- 🌙 Dark-themed UI for better developer aesthetics  
- 🧠 AI-enhanced explanations and real-time code feedback  
- ⚙️ Visual simulations of processes, threading, memory, and system calls  
- 🐧 Linux-first design philosophy  
- 🔄 Seamless integration with Spring Boot backend  
- 🧩 Modular components with clean structure and reusable logic  

---

## 🧰 Tech Stack

- **Framework:** React.js (with TypeScript - TSX)  
- **UI/UX:** TailwindCSS + Framer Motion  
- **State Management:** React Context / Redux (as needed)  
- **Routing:** React Router 
- **Icons & Components:** Lucide, ShadCN UI  
- **Linting/Formatting:** ESLint + Prettier  
- **Build Tooling:** Vite  

---

## 🗂️ Project Structure

```
bytecupids-frontend/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── modules/           # Individual lab modules
│   ├── pages/             # Page-level components
│   ├── assets/            # Images, icons, etc.
│   ├── hooks/             # Custom React hooks
│   ├── context/           # Global state/context providers
│   ├── utils/             # Utility functions/helpers
│   ├── services/          # API services
│   └── App.tsx            # Root component
├── .env                   # Environment variables
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # You're here!
```

---

## 🧪 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bytecupids-frontend.git
cd bytecupids-frontend
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start development server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the app in your browser.


## 🧠 Future Enhancements

- Real-time collaboration in labs  
- Personalized learning paths with user analytics  
- User mode with progress tracking  
- In-browser terminal sandbox with kernel-level simulations  

---

## 🤝 Contributing

1. Fork the repo  
2. Create your feature branch (`git checkout -b feat/awesome-feature`)  
3. Commit your changes (`git commit -m 'add: awesome feature'`)  
4. Push to the branch (`git push origin feat/awesome-feature`)  
5. Open a pull request 🚀  

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ✨ Credits

Built with 💻, ☕, and a lot of ❤️ by Jenish  
Designed for those who dream of building from the bare metal up.
