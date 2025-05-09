import React, { useState, useEffect } from "react";
import "../../styles/components/LandingPage/Hero.css";

// Accept className prop to apply the section class
interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  // Remove the particle implementation since we now have global particles
  
  return (
    <section className={`hero ${className || ""}`}>
      <div className="hero-top-hemisphere">
        <div className="hero-top-hemisphere-glow"></div>
        <div className="hero-top-hemisphere-inner-glow"></div>
        <div className="hero-top-hemisphere-highlight"></div>
        
        <div className="hero-content">
          <span className="hero-badge">🚀 Beta released</span>
          <h1 className="hero-title">Inference at the Edge</h1>
          <p className="hero-subtitle">
            Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class experience.
          </p>
          
          <div className="hero-actions">
            <button className="hero-btn primary">Get started</button>
            <button className="hero-btn secondary">Book a demo</button>
          </div>
        </div>
      </div>
      
      {/* Remove the section connector since we're creating a unified design */}
    </section>
  );
};

export default Hero;
