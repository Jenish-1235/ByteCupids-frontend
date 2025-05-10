import React, { useState, useEffect } from "react";
import "../../styles/components/LandingPage/Hero.css";

// Accept className prop to apply the section class
interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  // Handle button clicks
  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Get Started clicked");
    // Add your navigation or modal trigger here
  };
  
  return (
    <section className={`hero ${className || ""}`}>
      <div className="hero-top-hemisphere">
        <div className="hero-top-hemisphere-glow"></div>
        <div className="hero-top-hemisphere-inner-glow"></div>
        <div className="hero-top-hemisphere-highlight"></div>

        <div className="hero-content">
          <span className="hero-badge">🚀 Beta released</span>
          <h1 className="hero-title">Forget Courses,<br></br>Start Conversations.</h1>
          <p className="hero-subtitle">
            You don’t need another playlist — you need a companion who
            challenges your thinking, celebrates your mistakes, and helps you
            master computer science through real dialogue.
          </p>

          <div className="hero-actions">
            <button 
              className="hero-btn primary" 
              onClick={handleGetStarted}
              style={{cursor: 'pointer', position: 'relative', zIndex: 101}}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
