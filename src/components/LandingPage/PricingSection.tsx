import React, { useState } from "react";
import "../../styles/components/LandingPage/PricingSection.css";

interface PlanFeature {
  text: string;
  highlighted?: boolean;
}

interface Plan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: PlanFeature[];
  recommended?: boolean;
  ctaText: string;
}

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      ctaText: "Start Free",
      features: [
        { text: "Access to community forum" },
        { text: "10 AI chat messages / day" },
        { text: "Basic progress tracking" },
        { text: "Limited topic access", highlighted: false },
        { text: "Standard response time", highlighted: false },
      ],
    },
    {
      name: "Pro",
      monthlyPrice: "$19",
      annualPrice: "$14",
      recommended: true,
      ctaText: "Get Pro",
      features: [
        { text: "Unlimited AI chat", highlighted: true },
        { text: "All deep-dive articles", highlighted: true },
        { text: "Advanced analytics & streaks", highlighted: true },
        { text: "Complete topic access", highlighted: true },
        { text: "Priority response time", highlighted: false },
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: "$49",
      annualPrice: "$39",
      ctaText: "Contact Sales",
      features: [
        { text: "Team accounts & roles", highlighted: true },
        { text: "Custom content pipelines", highlighted: true },
        { text: "Dedicated priority support", highlighted: true },
        { text: "API access & integrations", highlighted: true },
        { text: "Custom branding options", highlighted: true },
      ],
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      {/* Header */}
      <div className="pricing-header">
        <div className="pricing-badge">Ready To Start?</div>
        <h2 className="pricing-title">Choose Your Learning Experience</h2>
        <p className="pricing-subtitle">
          Find the perfect conversation-driven learning tier for your needs,
          with flexible options.
        </p>

        {/* Toggle for monthly/annual pricing */}
        <div className="pricing-toggle">
          <span className={!isAnnual ? "active" : ""}>Monthly</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <span className="slider"></span>
          </label>
          <span className={isAnnual ? "active" : ""}>
            Annual <span className="save-badge">Save 25%</span>
          </span>
        </div>
      </div>

      {/* Grid with individual card animations */}
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card${plan.recommended ? " recommended" : ""}`}
          >
            {plan.recommended && <div className="badge">Most Popular</div>}
            <div className="card-content">
              <div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="price-period">
                    {" "}
                    /{isAnnual ? " year" : " month"}
                  </span>
                </div>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={feature.highlighted ? "highlighted" : ""}
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <button className="btn plan-cta">{plan.ctaText}</button>
            </div>
            <div className="shine-overlay"></div>
          </div>
        ))}
      </div>

      {/* Payment options note */}
      <div className="pricing-footer">
        <p className="guarantee">
          30-day money-back guarantee, no questions asked!
        </p>
      </div>
    </section>
  );
};

export default PricingSection;