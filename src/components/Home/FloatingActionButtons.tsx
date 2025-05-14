import React, { useState } from "react";
import "../../styles/components/Home/FloatingActionButtons.css";
import { FaMicrophone, FaPenFancy, FaTimes } from "react-icons/fa";

const actions = [
  "Learn with discussion",
  "problem 1",
  "problem 2",
  "problem 3",
];

const FloatingActionButtons: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActionClick = (idx: number) => {
    if (idx === 0) {
      // Learn with discussion: navigate or show alert for now
      alert("Navigate to Learn with Discussion page (to be implemented)");
    } else {
      alert(`Open Problem: ${actions[idx]}`);
    }
  };

  return (
    isMobile ? (
      <div className="fab-container">
        {/* Mic Icon */}
        <button
          className="fab fab-mic"
          aria-label="Learn with discussion"
          onClick={() => handleActionClick(0)}
          style={{ background: "var(--color-rose-gold)", color: "#fff" }}
        >
          <FaMicrophone />
        </button>
        {/* Pen Icon */}
        <button
          className="fab fab-pen"
          aria-label="Choose question to practice"
          onClick={() => setShowPanel(true)}
          style={{ background: "var(--color-rose-gold)", color: "#fff" }}
        >
          <FaPenFancy />
        </button>
        {/* Pop-up Panel */}
        {showPanel && (
          <div className="fab-popup-panel" style={{ background: "var(--color-bg-primary)", color: "var(--color-text-primary)" }}>
            <div className="fab-popup-header">
              <span></span>
              <button className="fab-popup-close" onClick={() => setShowPanel(false)} aria-label="Close panel">
                <FaTimes />
              </button>
            </div>
            <div className="fab-popup-content">
              <ul>
                {actions.map((action, idx) => (
                  <li key={action} onClick={() => handleActionClick(idx)}>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    ) : null
  );
};

export default FloatingActionButtons;
