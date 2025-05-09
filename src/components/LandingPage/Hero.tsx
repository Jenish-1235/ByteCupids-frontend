import React from "react";
import ParticlesBg from 'particles-bg'; // Import particles-bg
import "../../styles/components/LandingPage/Hero.css";

const Hero: React.FC = () => {
  // Custom config for particles to better match the image
  const config = {
    num: [80, 100], // Random amount between 80-100 particles
    rps: 0.1, // Rotation per second
    radius: [0.5, 2], // Random size between 0.5-2px stars
    life: [1.5, 3], // Life span of each particle
    v: [0.1, 0.3], // Velocity
    tha: [-180, 180], // Direction angle
    alpha: [0.1, 0.8], // Random opacity
    scale: [0.1, 0.4], // Random scale
    position: "all", // Position all around
    color: ["#a0aec0", "#718096", "#ffffff"], // Star colors: gray, light gray, white
    cross: "dead", // Crossover behavior
    random: 10, // Randomness
    g: 0.1, // Gravity - make it very light
    onParticleUpdate: (ctx: CanvasRenderingContext2D, particle: { p: { x: number; y: number }; radius: number; color: string }) => {
      // Custom rendering for stars - simple dot with glow
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Add a subtle glow effect
      const glow = ctx.createRadialGradient(
        particle.p.x, particle.p.y, 0,
        particle.p.x, particle.p.y, particle.radius * 3
      );
      glow.addColorStop(0, particle.color);
      glow.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = glow;
      ctx.arc(particle.p.x, particle.p.y, particle.radius * 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      ctx.closePath();
    }
  };

  return (
    <section className="hero">
      {/* Add particles container as the first element */}
      <div className="particles-container">
        <ParticlesBg type="custom" config={config} bg={true} />
      </div>

      {/* Top hemisphere containing only text content */}
      <div className="hero-top-hemisphere">
        {/* Add layered glows for more depth */}
        <div className="hero-top-hemisphere-glow"></div>
        <div className="hero-top-hemisphere-inner-glow"></div>
        
        <div className="hero-top-hemisphere-highlight"></div>
        
        {/* Text content inside the hemisphere */}
        <div className="hero-content">
          <span className="hero-badge">🚀 Beta released</span>
          <h1 className="hero-title">Inference at the Edge</h1>
          <p className="hero-subtitle">
            Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class experience.
          </p>
        </div>
      </div>
      
      {/* CTA buttons outside the hemisphere */}
      <div className="hero-actions">
        <button className="hero-btn primary">Get started</button>
        <button className="hero-btn secondary">Book a demo</button>
      </div>
    </section>
  );
};

export default Hero;
