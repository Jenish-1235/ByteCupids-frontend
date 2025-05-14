import React from "react";
import "../../styles/components/LandingPage/Pricing.css";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic Labs", "Community Support", "Limited AI Feedback"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--color-surface-2)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-neon-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["All Labs", "Priority Support", "Unlimited AI Feedback", "Collaboration"],
    highlight: true,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--color-neon-violet)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: ["Custom Integrations", "Dedicated Support", "Team Analytics"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="var(--color-rose-gold)" />
        <path d="M8 12l2 2 4-4" stroke="var(--color-neon-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Pricing({ className }: { className?: string }) {
  return (
    <section className={`platform-overview ${className || ""}`}>
      <div className="platform-overview-container">
        <div className="platform-overview-header">
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">
            Simple, transparent pricing for every learner and team.
          </p>
        </div>
        <div className="platform-overview-grid">
          {plans.map((plan, i) => (
            <div
              className={`overview-card${plan.highlight ? " overview-card--highlight" : ""}`}
              key={i}
            >
              <div className="plan-icon">{plan.icon}</div>
              <h3>{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <span className="plan-feature-dot" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.highlight && (
                <div className="plan-badge">Most Popular</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}