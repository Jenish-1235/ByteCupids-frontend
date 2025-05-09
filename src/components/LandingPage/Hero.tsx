import React, { useState, useEffect } from "react";
import ParticlesBg from 'particles-bg';
import "../../styles/components/LandingPage/Hero.css";

const Hero: React.FC = () => {
  // State to track screen size for responsive particles
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Update window width when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Adjust particle count based on screen size
  const getParticleCount = () => {
    if (windowWidth <= 480) return [20, 30]; // Fewer particles on mobile
    if (windowWidth <= 768) return [30, 50]; // Medium amount on tablets
    return [60, 70]; // Full amount on desktop
  };

  // Custom config for particles to better match the image
  const config = {
    num: getParticleCount(), // Responsive particle count
    rps: 0.1, // Rotation per second
    radius: [0.5, windowWidth <= 768 ? 1.5 : 2], // Smaller stars on mobile
    life: [1.5, 3], // Life span of each particle
    v: [0.1, 0.3], // Velocity
    tha: [-180, 180], // Direction angle
    alpha: [0.1, 0.8], // Random opacity
    scale: [0.1, windowWidth <= 480 ? 0.3 : 0.4], // Smaller scale on mobile
    position: "all", // Position all around
    color: ["#a0aec0", "#718096", "#ffffff"], // Star colors
    cross: "dead", // Crossover behavior
    random: 10, // Randomness
    g: 0.1, // Gravity - make it very light
    // Use device pixel ratio to optimize rendering
    onParticleUpdate: (ctx: CanvasRenderingContext2D, particle: { p: { x: number; y: number }; radius: number; color: string }) => {
      // Adjust glow size based on screen size
      const glowSize = windowWidth <= 480 ? 2 : 3;
      
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Add a subtle glow effect - smaller on mobile
      const glow = ctx.createRadialGradient(
        particle.p.x, particle.p.y, 0,
        particle.p.x, particle.p.y, particle.radius * glowSize
      );
      glow.addColorStop(0, particle.color);
      glow.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = windowWidth <= 480 ? 0.15 : 0.2; // Less glow intensity on mobile
      ctx.fillStyle = glow;
      ctx.arc(particle.p.x, particle.p.y, particle.radius * glowSize, 0, Math.PI * 2);
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
        <div className="hero-actions">
          <button className="hero-btn primary">Get started</button>
          <button className="hero-btn secondary">Book a demo</button>
        </div>
      </div>

      {/* CTA buttons outside the hemisphere */}

      {/* Add a subtle scroll indicator to connect with platform section */}
      <div className="section-connector">
        <div className="connector-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
