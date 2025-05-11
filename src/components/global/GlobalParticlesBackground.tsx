import React, { useEffect, useState } from 'react';
import ParticlesBg from 'particles-bg';
import '../../styles/components/LandingPage/GlobalParticlesBackground.css';

const GlobalParticlesBackground: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Adjust particle count based on screen size
  const getParticleCount = (): number => {
    if (windowWidth <= 480) return 15;
    if (windowWidth <= 768) return 25;
    if (windowWidth <= 1200) return 35;
    return 50;
  };

  // Configuration for particles
  const config = {
    num: [getParticleCount()],
    rps: 0.1,
    radius: [0.5, 2.5],
    life: [1.5, 3],
    v: [0.1, 0.3],
    tha: [-40, 40],
    alpha: [0.2, 0.8],
    scale: [0.1, 0.4],
    position: "all",
    cross: "dead",
    random: 15,
    color: ["#a0aec0", "#718096", "#ffffff"],
    g: 0.1,
    onParticleUpdate: (ctx: any, particle: any) => {
      ctx.beginPath();
      ctx.arc(
        particle.p.x,
        particle.p.y,
        particle.radius,
        0,
        2 * Math.PI,
        false
      );
      ctx.fillStyle = `rgba(0, 169, 157, ${particle.alpha})`;
      ctx.fill();
    },
  };

  return (
    <div className="global-particles-container">
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
};

export default GlobalParticlesBackground;