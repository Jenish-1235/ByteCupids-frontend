import React from "react";
import { FaComments, FaSearch, FaChartBar, FaUsers } from "react-icons/fa";

import "../../styles/components/LandingPage/FeaturesSection.css";

interface Feature {
  Icon: React.ComponentType<{ size?: string | number; color?: string }>;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: FaComments,
    title: "Real-Time Chat",
    desc: "Instant, judgment-free feedback from your AI tutor as you think out loud.",
  },
  {
    Icon: FaSearch,
    title: "Deep Dives",
    desc: "Inline Markdown articles, live code samples, and interactive 3D sims.",
  },
  {
    Icon: FaChartBar,
    title: "Progress Tracking",
    desc: "Streak meters, completion badges, and detailed analytics to keep you going.",
  },
  {
    Icon: FaUsers,
    title: "Community Support",
    desc: "Share wins, ask peers, and get help in our vibrant Discord community.",
  },
];

export const FeaturesSection: React.FC = () => (
  <section className="features-section">
    <div className="features-header">
      <h2 className="features-title">Explore Our Core Features</h2>
      <p className="features-hook">
        These four pillars power your interactive, conversation-driven learning
        journey.
      </p>
    </div>

    <div className="features-grid">
      {features.map((f, idx) => {
        const floatClass = idx % 2 === 0 ? "float-1" : "float-2";
        return (
          <div key={f.title} className={`feature-card ${floatClass}`}>
            <div className="feature-card-inner">
              <span className="feature-icon">
                <f.Icon size={48} />
              </span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default FeaturesSection;
