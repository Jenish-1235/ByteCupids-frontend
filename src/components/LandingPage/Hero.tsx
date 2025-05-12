// src/components/LandingPage/Hero.tsx
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { HeroBot } from "./HeroBot"; // Ensure this path is correct
import "../../styles/components/LandingPage/Hero.css"; // Ensure this path is correct
import { useNavigate } from "react-router";

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { ref } = useInView({ threshold: 0.5, triggerOnce: true });

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <section className="hero" ref={ref}>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Forget Courses,
            <br />
            Start Conversations
          </h1>
          <p className="hero-subtitle">
            You don't need another playlist — you need a companion who
            challenges your thinking, celebrates your mistakes, and helps you
            master computer science through real dialogue.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn secondary">Join community !</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-right-content" style={{ position: "relative" }}>
            {/* Bot peeking from behind code panel */}
            <div className="bot-behind-code">
              <HeroBot />
            </div>
            <div className="hero-code-panel">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot red" />
                  <span className="code-dot yellow" />
                  <span className="code-dot green" />
                </div>
              </div>
              <div className="code-content">
                <div className="code-title">
                  # Optimized inference with ByteCupids
                </div>
                <pre>
                  <code>
                    <span className="function-decorator">@deco_event</span>
                    <br />
                    <span className="function-def">async def process</span>()
                    <span className="punctuation">:</span>
                    <br />
                    <br />
                    <span className="indent"> </span>model.forward(
                    <span className="param">input</span>){" "}
                    <span className="punctuation">-&gt;</span>{" "}
                    <span className="return-type">tensor</span>
                    <span className="punctuation">:</span>
                    <br />
                    <span className="punctuation">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
