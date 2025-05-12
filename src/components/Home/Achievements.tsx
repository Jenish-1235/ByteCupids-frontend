import React from "react";

const badges = [
  { icon: "/images/star.svg", alt: "Star" },
  { icon: "/images/trophy.svg", alt: "Trophy" },
  { icon: "/images/shield.svg", alt: "Shield" },
  { icon: "/images/rocket.svg", alt: "Rocket" },
];

const Achievements: React.FC = () => (
  <div className="achievements-section">
    <div className="achievements-title">Achievements</div>
    <div className="achievements-subtitle">Badges Earned</div>
    <div className="badges-row">
      {badges.map((badge, idx) => (
        <span className="badge" key={idx}>
          <img src={badge.icon} alt={badge.alt} />
        </span>
      ))}
    </div>
  </div>
);

export default Achievements;