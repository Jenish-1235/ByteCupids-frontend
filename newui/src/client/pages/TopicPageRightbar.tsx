import React from "react";
import "../styles/TopicContent.css";

const actions = [
  "Learn with discussion",
  "problem 1",
  "problem 2",
  "problem 3",
];

const TopicPageRightbar: React.FC = () => (
  <div className="topic-actions-panel">
    {actions.map((label, i) => (
      <div key={i} className="topic-action-tile">
        {label}
      </div>
    ))}
  </div>
);

export default TopicPageRightbar;
