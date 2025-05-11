import React from "react";
import ParticlesBg from "particles-bg";

const DashboardParticles: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
    }}
  >
    <ParticlesBg
      type="custom"
      config={{
        num: [20, 28], // Fewer, smaller particles
        rps: 0.08,
        radius: [1.5, 3], // Smaller size
        life: [1.5, 3],
        v: [0.5, 1],
        tha: [-40, 40],
        alpha: [0.18, 0.28], // Less visible
        scale: [0.5, 1],
        position: "all",
        color: ["#00a99d", "#2cb67d", "#ff1493"],
        cross: "dead",
        random: 15,
        g: 1,
      }}
      bg={true}
    />
  </div>
);

export default DashboardParticles;
