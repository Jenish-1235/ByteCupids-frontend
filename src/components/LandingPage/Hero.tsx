import React from "react";
import "../../styles/components/LandingPage/Hero.css";
import { useNavigate } from "react-router";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const navigateTo = useNavigate();

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo("/onboarding");
  };
  
  return (
    <section className={`hero ${className || ""}`}>
      <div className="container hero-container">
        <div className="hero-left">
          <h1 className="hero-title">Forget Courses,<br/>Start Conversations</h1>
          <p className="hero-subtitle">
            You don't need another playlist — you need a companion 
            who challenges your thinking, celebrates your mistakes, 
            and helps you master computer science through 
            real dialogue.
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={handleGetStarted}>
              Get Started
            </button>
            <button className="btn secondary">
              Try Demo
            </button>
          </div>
        </div>
        
        <div className="hero-right">
          {/* Mini-bot SVG Component */}
          <div className="hero-bot" aria-hidden="true">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Face Circle */}
              <circle cx="100" cy="50" r="40" stroke="var(--color-neon-violet)" strokeWidth="4" />
              {/* Eyes */}
              <circle cx="80" cy="45" r="4" fill="var(--color-neon-violet)" />
              <circle cx="120" cy="45" r="4" fill="var(--color-neon-violet)" />
              {/* Smile Path */}
              <path d="M80,60 Q100,80 120,60" stroke="var(--color-neon-violet)" strokeWidth="4" fill="none" />
              {/* Arm (dashed) */}
              <path className="bot-arm" d="M100,90 C150,90 150,140 100,140" stroke="var(--color-neon-violet)" strokeWidth="3" strokeDasharray="8 8" fill="none" />
              {/* Hand */}
              <circle cx="100" cy="140" r="8" fill="var(--color-neon-violet)" />
            </svg>
          </div>
          
          <div className="hero-code-panel">
            <div className="code-header">
              <div className="code-dots">
                <div className="code-dot red"></div>
                <div className="code-dot yellow"></div>
                <div className="code-dot green"></div>
              </div>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="comment"># Optimized inference with</span>
                  <br />
                  <span className="keyword">ByteCupids</span>
                  <br /><br />
                  <span className="keyword">@deco_event</span>
                  <br />
                  <span className="keyword">async def process</span>()<span className="keyword">:</span>
                  <br /><br />
                  &nbsp;&nbsp;model.forward(<span className="string">input</span>) <span className="keyword">-&gt;</span> <span className="string">tensor</span><span className="keyword">:</span>
                  <br />
                  <span className="keyword">&#125;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;