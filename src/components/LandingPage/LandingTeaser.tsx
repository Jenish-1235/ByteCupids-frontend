import React, { useRef } from "react";
import "../../styles/components/LandingPage/LandingTeaser.css";

export const LandingTeaser: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!frameRef.current) return;
    const el = frameRef.current;
    const { left, top, width, height } = el.getBoundingClientRect();

    // Normalize mouse position to [-1…1]
    const xNorm = (e.clientX - left - width / 2) / (width / 2);
    const yNorm = (e.clientY - top - height / 2) / (height / 2);

    // Inward tilt: base +6° on Y, -6° on X, then offset by mouse
    const yRot = xNorm * 8 + 6; // positive → tilt into content
    const xRot = -yNorm * 8 - 6; // negative → tilt down toward user

    el.style.transform = `
      perspective(1000px)
      rotateY(${yRot}deg)
      rotateX(${xRot}deg)
      scale(1.05)
    `;
    el.style.boxShadow = `
      0 25px 50px rgba(170,0,255,0.25),
      ${xNorm * 25}px ${-yNorm * 25}px 80px rgba(255,182,145,0.35)
    `;
  };

  const handleMouseLeave = () => {
    if (!frameRef.current) return;
    const el = frameRef.current;
    // Reset to inward tilt
    el.style.transform =
      "perspective(1000px) rotateY(6deg) rotateX(-6deg) scale(1)";
    el.style.boxShadow = "0 15px 30px rgba(0,0,0,0.6)";
  };

  return (
    <section className="landing-teaser swapped">
      <div
        className="teaser-frame"
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/images/topic-page-screenshot.png"
          alt="Platform preview"
          className="frame-image"
        />
        <div className="shine-overlay" />
      </div>

      <div className="teaser-right">
        <h2 className="teaser-title">Experience ByteCupids Live</h2>
        <p className="teaser-subtitle">
          Step inside a real topic page—tilt, explore, and see our interactive
          UI in action. Drag your cursor over the screen for 3D tilt, dynamic
          glow, and a glass-like shine.
        </p>
        <button className="btn gradient-btn teaser-btn">Try the Demo</button>
      </div>
    </section>
  );
};

export default LandingTeaser;
