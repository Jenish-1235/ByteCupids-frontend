import React, { useState } from "react";
import "../../styles/components/Home/HomeContent.css";

const DUMMY_MODULES = [
  { id: "MOD001", name: "Introduction to React" },
  { id: "MOD002", name: "Advanced TypeScript" },
  { id: "MOD003", name: "CSS Animations" },
  { id: "MOD004", name: "Node.js Fundamentals" },
  { id: "MOD005", name: "Database Design" },
  { id: "MOD006", name: "API Development" },
  { id: "MOD007", name: "Testing Strategies" },
  { id: "MOD008", name: "DevOps Basics" },
  { id: "MOD009", name: "React Native" },
  { id: "MOD010", name: "GraphQL Fundamentals" },
  { id: "MOD011", name: "MongoDB Basics" },
  { id: "MOD012", name: "Docker Containers" },
  { id: "MOD013", name: "Advanced Machine Learning" },
  { id: "MOD014", name: "Microservices Architecture" },
];

const HomeContent: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedModule, setSelectedModule] = useState<null | typeof DUMMY_MODULES[0]>(null);

  const filteredModules = DUMMY_MODULES.filter((mod) =>
    mod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content-section">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header__welcome-bar">
          <span className="greeting">
            <span className="greeting-highlight">Modules</span>
          </span>
          <div className="dashboard-header__actions">
            <input
              className="dashboard-header__search"
              type="text"
              placeholder="Search modules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fas fa-user-circle dashboard-header__profile"></i>
          </div>
        </div>
      </div>

      {/* Module Selection Panel */}
      <div className="module-grid">
        {filteredModules.map((mod) => (
          <div
            key={mod.id}
            className="module-tile"
            onClick={() => setSelectedModule(mod)}
          >
            <div className="module-tile__name">{mod.name}</div>
            <div className="module-tile__id">{mod.id}</div>
          </div>
        ))}
      </div>

      {/* Topic Selection Panel */}
      {selectedModule && (
        <div
          className="topic-selection-overlay"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("topic-selection-overlay")) {
              setSelectedModule(null);
            }
          }}
        >
          <div className="topic-selection-panel">
            <button
              className="close-button"
              onClick={() => setSelectedModule(null)}
            >
              &times;
            </button>
            <h2>{selectedModule.name}</h2>
            <ul className="topic-list">
              <li>Topic 1</li>
              <li>Topic 2</li>
              <li>Topic 3</li>
              <li>Topic 4</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;