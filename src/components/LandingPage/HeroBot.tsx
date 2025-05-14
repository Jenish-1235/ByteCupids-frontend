// src/components/LandingPage/HeroBot.tsx
import React from "react";
import "../../styles/components/LandingPage/Hero.css"; // Ensure this path is correct

export const HeroBot: React.FC = () => {
  return (
    <svg
      className="hero-bot" // Class for general bot styling and initial animation
      width="120" // Adjust width as needed
      height="120" // Adjust height as needed
      viewBox="0 0 200 200" // Adjust viewBox to match your SVG's coordinate system
      xmlns="http://www.w3.org/2000/svg"
      fill="none" // Default fill to none, specific parts can have fills
      stroke="var(--color-neon-violet)" // Default stroke color from your CSS variables
      strokeWidth="4" // Default stroke width
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Head */}
      <circle cx="100" cy="60" r="38" fill="var(--color-surface)" />
      {/* Eyes */}
      <ellipse cx="88" cy="55" rx="5" ry="6" fill="var(--color-neon-violet)" />
      <ellipse cx="112" cy="55" rx="5" ry="6" fill="var(--color-neon-violet)" />
      {/* Smile */}
      <path d="M88 72 Q100 85 112 72" stroke="var(--color-neon-violet)" strokeWidth="3" fill="none" />
      {/* Neck */}
      <rect x="92" y="98" width="16" height="14" rx="6" fill="var(--color-neon-violet)" opacity="0.3" stroke="none" />
      {/* Torso - now an ellipse for a rounded look */}
      <ellipse cx="100" cy="140" rx="36" ry="32" fill="var(--color-surface)" />
      {/* Torso details */}
      <ellipse cx="100" cy="145" rx="14" ry="7" fill="var(--color-neon-violet)" opacity="0.10" stroke="none" />
      {/* Left Arm (static) */}
      <path d="M64 130 Q40 150 64 170" />
      {/* Right Arm (waving, animated) */}
      <g>
        <path
          d="M136 130 Q170 120 160 70"
          stroke="var(--color-neon-violet)"
          strokeWidth="4"
          fill="none"
        />
        {/* Hand */}
        <ellipse cx="160" cy="70" rx="8" ry="6" fill="var(--color-neon-violet)" />
      </g>
    </svg>
  );
};

export default HeroBot;
