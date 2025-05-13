import React from "react";
const actions = [
  "Learn with discussion",
  "problem 1",
  "problem 2",
  "problem 3",
];

const ActionsPanel: React.FC = () => (
  <div className="topic-page__actions-panel">
    {actions.map((label, i) => (
      <div key={i} className="topic-page__action-tile">
        {label}
      </div>
    ))}
  </div>
);

export default ActionsPanel;
