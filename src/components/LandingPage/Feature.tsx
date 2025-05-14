import React from "react";
import "../../styles/components/LandingPage/PlatformOverview.css";

const features = [
  {
    title: "Real-Time Collaboration",
    description: "Work together with peers in live OS labs.",
    icon: "🤝",
  },
  {
    title: "Visual Simulations",
    description: "See processes, memory, and system calls in action.",
    icon: "🖥️",
  },
  {
    title: "AI-Powered Feedback",
    description: "Get instant, personalized code reviews and hints.",
    icon: "🤖",
  },
  {
    title: "Linux-First Labs",
    description: "Practice in a real Linux environment, right in your browser.",
    icon: "🐧",
  },
];

export default function Feature({ className }: { className?: string }) {
  return (
    <section className={`platform-overview ${className || ""}`}>
      <div className="platform-overview-container">
        <div className="platform-overview-header">
          <h2 className="section-title">Why ByteCupids?</h2>
          <p className="section-subtitle">
            Everything you need to master OS and systems programming, in one place.
          </p>
        </div>
        <div className="platform-overview-grid">
          {features.map((f, i) => (
            <div className="overview-card" key={i}>
              <div className="icon-container">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}