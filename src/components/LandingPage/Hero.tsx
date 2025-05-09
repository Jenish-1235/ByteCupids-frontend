import React from "react";
import ParticlesBg from 'particles-bg'; // Import particles-bg
import "../../styles/components/LandingPage/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <ParticlesBg type="cobweb" bg={true} color="#4d5d60" num={100} /> 
      <div className="hero-content">
        <span className="hero-badge">🚀 Beta released</span>
        <h1 className="hero-title">Inference at the Edge</h1>
        <p className="hero-subtitle">
          Boost your AI application’s speed and efficiency globally by bringing
          inference closer to your users. Enjoy customization and
          cost-efficiency for a best-in-class experience.
        </p>
        <div className="hero-actions">
          <button className="hero-btn primary">Get started</button>
          <button className="hero-btn secondary">Book a demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
