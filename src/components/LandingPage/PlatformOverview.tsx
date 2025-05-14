import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import '../../styles/components/LandingPage/PlatformOverview.css';

interface PlatformOverviewProps {
  className?: string;
}

const features = [
  {
    icon: (
      <svg className="icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="var(--color-neon-violet)" strokeWidth="2" fill="rgba(170,0,255,0.08)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Instant Edge Inference",
    desc: "Deploy and run models globally with ultra-low latency from any region."
  },
  {
    icon: (
      <svg className="icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="var(--color-rose-gold)" strokeWidth="2" fill="rgba(255, 193, 131, 0.08)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-neon-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Secure & Private",
    desc: "Your data never leaves your region. All inference is encrypted and privacy-first."
  },
  {
    icon: (
      <svg className="icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="7" stroke="var(--color-neon-violet)" strokeWidth="2" fill="rgba(170,0,255,0.08)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Developer Friendly",
    desc: "SDKs, CLI, and REST APIs for seamless integration into any stack."
  },
  {
    icon: (
      <svg className="icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,22 2,22" stroke="var(--color-rose-gold)" strokeWidth="2" fill="rgba(255, 193, 131, 0.08)" />
        <path d="M8 15l4-8 4 8" stroke="var(--color-neon-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Scalable & Reliable",
    desc: "99.9% uptime, auto-scaling, and analytics for teams and enterprises."
  }
];

const PlatformOverview: React.FC<PlatformOverviewProps> = ({ className }) => {
  return (
    <section className={`platform-overview ${className || ""}`}>
      <div className="platform-overview-container">
        <ScrollAnimation animationType="fade-up">
          <div className="platform-overview-header">
            <h2 className="section-title">Platform Overview</h2>
            <p className="section-subtitle">
              The ByteCupids platform brings you blazing-fast, secure, and developer-first AI inference at the edge. Explore our features and see how you can deploy, scale, and monitor your models with ease.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={0.1}>
          <div className="platform-overview-grid">
            {features.map((f, i) => (
              <div className="overview-card" key={i}>
                <div className="icon-container">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={0.15}>
          <div className="platform-screenshot">
            <div className="screenshot-container">
              <div className="screenshot-window">
                <div className="window-controls">
                  <span className="control-dot red"></span>
                  <span className="control-dot yellow"></span>
                  <span className="control-dot green"></span>
                </div>
                <div className="window-content">
                  <div className="platform-demo-visual">
                    <div className="code-editor">
                      <pre><code>{`// Optimized inference with ByteCupids
import bytecupids from '@bytecupids/sdk';

// Initialize client
const client = bytecupids.createClient({
  apiKey: process.env.BYTECUPIDS_API_KEY
});

// Deploy your model to edge
await client.deployModel({
  name: "gpt-j-6b",
  version: "1.0.0",
  regions: ["na-east", "eu-west", "ap-south"],
  optimization: "INT8"
});

// Run inference
const result = await client.infer({
  model: "gpt-j-6b",
  input: "Translate to French: Hello world"
});

console.log(result.output); // "Bonjour le monde"`}</code></pre>
                    </div>
                    <div className="dashboard-preview">
                      <div className="chart-placeholder"></div>
                      <div className="stats">
                        <div className="stat">
                          <span className="stat-value">47ms</span>
                          <span className="stat-label">Avg Latency</span>
                        </div>
                        <div className="stat">
                          <span className="stat-value">99.9%</span>
                          <span className="stat-label">Uptime</span>
                        </div>
                        <div className="stat">
                          <span className="stat-value">302</span>
                          <span className="stat-label">Edge Points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-up" delay={0.2}>
          <div className="platform-cta">
            <button className="platform-btn">View Documentation</button>
            <a href="#pricing" className="platform-link">Compare Plans</a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PlatformOverview;