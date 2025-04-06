import "../styles/pages/LandingPage.css";
import { motion } from "framer-motion";
import RegisterForm from "../components/RegisterForm.tsx";
import { useState } from "react";
import Particles from "../components/Particles.tsx";
import LoginForm from "../components/LoginForm.tsx";

export default function LandingPage() {
  const [authForm, setAuthForm] = useState<"login" | "register" | null>(null);

  const handleSignUpClick = () => {
    setAuthForm("register");
  };

  const handleLoginClick = () => {
    setAuthForm("login");
  };

  return (
    <div className="landing-page">
      <Particles />
      <div className="landing-page-content">
        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="logo-container"
        >
          <h1 className="title">ByteCupids 💕</h1>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="description-container"
        >
          <p className="tagline">Connecting Hearts with Machines...</p>
        </motion.div>

        <motion.div
          className="auth-buttons"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="auth-button-container">
            <div className="auth-button">
              <button className="login-button" onClick={handleLoginClick}>
                Login
              </button>
              <button className="signup-button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>

        {authForm === "register" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="register-form-container"
          >
            <button className="close-button" onClick={() => setAuthForm(null)}>
              ×
            </button>
            <RegisterForm onLoginClick={() => setAuthForm("login")} />
          </motion.div>
        )}

        {authForm === "login" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="login-form-container"
          >
            <button
              className="close-button"
              onClick={() => setAuthForm(null)} // Close the form when clicked
            >
              ×
            </button>
            <LoginForm onRegisterClick={() => setAuthForm("register")} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
