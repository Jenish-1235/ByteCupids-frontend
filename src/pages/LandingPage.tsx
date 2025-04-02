import AuthButton from "../components/AuthButton";
import "../styles/LandingPage.css";
import { motion } from "framer-motion";

export default function LandingPage() {
  const particles = [...Array(40)].map(() => ({
    x: Math.random() * 100, // Random X position (0 to 100%)
    y: Math.random() * 100, // Random Y position (0 to 100%)
    size: Math.random() * 8 + 3, // Random size (3px to 11px)
    duration: Math.random() * 5 + 3, // Random animation duration
    delay: Math.random() * 5, // Random delay
  }));

  const binaryNumbers = [...Array(25)].map(() => ({
    x: Math.random() * 100, // Random X position (0% - 100%)
    delay: Math.random() * 5, // Random animation delay
    duration: Math.random() * 6 + 4, // Random animation speed
    value: Math.random() > 0.5 ? "1" : "0", // Random 1s or 0s
  }));

  return (
    <div className="landing-page">
      <div className="binary-container">
        {binaryNumbers.map((binary, i) => (
          <motion.span
            key={i}
            className="binary"
            style={{ left: `${binary.x}%` }}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 0.5, 0] }} // Falling effect
            transition={{
              duration: binary.duration,
              repeat: Infinity,
              ease: "linear",
              delay: binary.delay,
            }}
          >
            {binary.value}
          </motion.span>
        ))}
      </div>
      <div className="particles-container">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0], // Fade in and out
              y: ["0px", "-50px", "0px"], // Float up and down
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>
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
            <AuthButton />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
