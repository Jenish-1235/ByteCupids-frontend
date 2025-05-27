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

// Dummy topics and subtopics for demonstration
const DUMMY_TOPICS = [
  {
    id: "T1",
    name: "Topic 1",
    subtopics: [
      { id: "S1", name: "Subtopic 1.1" },
      { id: "S2", name: "Subtopic 1.2" },
      { id: "S3", name: "Subtopic 1.3" },
      { id: "S4", name: "Subtopic 1.4" },
      { id: "S5", name: "Subtopic 1.5" },
    ],
  },
  {
    id: "T2",
    name: "Topic 2",
    subtopics: [
      { id: "S6", name: "Subtopic 2.1" },
      { id: "S7", name: "Subtopic 2.2" },
      { id: "S8", name: "Subtopic 2.3" },
      { id: "S9", name: "Subtopic 2.4" },
      { id: "S10", name: "Subtopic 2.5" },
    ],
  },
  {
    id: "T3",
    name: "Topic 3",
    subtopics: [
      { id: "S11", name: "Subtopic 3.1" },
      { id: "S12", name: "Subtopic 3.2" },
      { id: "S13", name: "Subtopic 3.3" },
      { id: "S14", name: "Subtopic 3.4" },
      { id: "S15", name: "Subtopic 3.5" },
    ],
  },
  {
    id: "T4",
    name: "Topic 4",
    subtopics: [
      { id: "S16", name: "Subtopic 4.1" },
      { id: "S17", name: "Subtopic 4.2" },
      { id: "S18", name: "Subtopic 4.3" },
      { id: "S19", name: "Subtopic 4.4" },
      { id: "S20", name: "Subtopic 4.5" },
    ],
  },
  {
    id: "T5",
    name: "Topic 5",
    subtopics: [
      { id: "S21", name: "Subtopic 5.1" },
      { id: "S22", name: "Subtopic 5.2" },
      { id: "S23", name: "Subtopic 5.3" },
      { id: "S24", name: "Subtopic 5.4" },
      { id: "S25", name: "Subtopic 5.5" },
    ],
  },
];

const HomeContent: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedModule, setSelectedModule] = useState<
    null | (typeof DUMMY_MODULES)[0]
  >(null);
  const [difficulty, setDifficulty] = useState<{ [id: string]: string }>({});
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);

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
        {filteredModules.map((mod) => {
          // Pick color based on first letter (E: green, M: yellow, H: red, default: purple)
          const firstLetter = mod.name[0].toUpperCase();
          let circleColor = "#b983ff"; // default purple
          if (firstLetter === "E" || firstLetter === "I" || firstLetter === "N")
            circleColor = "#3ecf8e"; // green
          else if (
            firstLetter === "M" ||
            firstLetter === "D" ||
            firstLetter === "C"
          )
            circleColor = "#ffd166"; // yellow
          else if (
            firstLetter === "H" ||
            firstLetter === "A" ||
            firstLetter === "G" ||
            firstLetter === "R"
          )
            circleColor = "#ff5e5e"; // red

          return (
            <div
              key={mod.id}
              className="module-tile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "1.5rem",
                position: "relative",
              }}
            >
              {/* Difficulty Selector styled as button, beside Start, both hidden on popup */}
              {!selectedModule && (
                <>
                  <div className="module-tile__difficulty">
                    <select
                      value={difficulty[mod.id] || "Easy"}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        setDifficulty({
                          ...difficulty,
                          [mod.id]: e.target.value,
                        })
                      }
                      aria-label="Select difficulty"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  <button
                    className="module-tile__discuss"
                    title="Start Module"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedModule(mod); // open popup only on Start
                    }}
                    aria-label="Start Module"
                  >
                    <span className="module-tile__discuss-text">Start</span>
                    <span className="module-tile__discuss-arrow-circle">→</span>
                  </button>
                </>
              )}
              <div
                style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
              >
                <span
                  className="module-tile__circle"
                  style={{ background: circleColor }}
                  aria-label={firstLetter}
                >
                  {firstLetter}
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="module-tile__name">{mod.name}</div>
                  <div className="module-tile__id">{mod.id}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Topic Selection Panel */}
      {selectedModule && (
        <div
          className="topic-selection-overlay"
          onClick={(e) => {
            if (
              (e.target as HTMLElement).classList.contains(
                "topic-selection-overlay"
              )
            ) {
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
              {DUMMY_TOPICS.map((topic) => (
                <li
                  key={topic.id}
                  className={selectedTopic === topic.id ? "selected" : ""}
                  onClick={() => {
                    setExpandedTopic(
                      expandedTopic === topic.id ? null : topic.id
                    );
                    setSelectedTopic(topic.id);
                  }}
                  style={{ position: "relative" }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {topic.name}
                    <span
                      style={{
                        marginLeft: 8,
                        fontSize: 18,
                        transition: "transform 0.2s",
                      }}
                    >
                      {expandedTopic === topic.id ? "▾" : "▸"}
                    </span>
                  </span>
                  {expandedTopic === topic.id && (
                    <ul className="subtopic-list">
                      {topic.subtopics.map((subtopic) => (
                        <li
                          key={subtopic.id}
                          className={
                            selectedSubtopic === subtopic.id ? "selected" : ""
                          }
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedSubtopic(subtopic.id);
                          }}
                        >
                          {subtopic.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
