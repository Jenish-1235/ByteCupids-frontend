import React from "react";
import ParticlesBg from "particles-bg";

const SidebarParticles: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "220px",
      height: "100vh",
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    <ParticlesBg
      type="custom"
      config={{
        num: [8, 12], // Even fewer in sidebar
        rps: 0.07,
        radius: [1, 2.2], // Smallest
        life: [1.5, 3],
        v: [0.5, 1],
        tha: [-40, 40],
        alpha: [0.12, 0.22], // Very subtle
        scale: [0.5, 1],
        position: "all",
        color: ["#00a99d", "#2cb67d", "#ff1493"],
        cross: "dead",
        random: 15,
        g: 1,
      }}
      bg={false}
    />
  </div>
);

export default SidebarParticles;
