import React, { useEffect, useState } from "react";
import HeroBot from "./HeroBot";

const HeroBotBottomRight = () => (
  <div style={{ transform: "rotate(45deg)" }}>
    <HeroBot />
  </div>
);

export const BotPeeker: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bot-peek-container${visible ? " visible" : ""}`}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 20,
        pointerEvents: "none",
        transition: "transform 2.2s cubic-bezier(.68,-0.55,.27,1.55), opacity 1.2s",
        transform: visible
          ? "translate(30%, 30%)"
          : "translate(120%, 120%)", // Start off-screen, then peek in a bit
        opacity: visible ? 1 : 0,
      }}
    >
      <HeroBotBottomRight />
    </div>
  );
};

export default BotPeeker;