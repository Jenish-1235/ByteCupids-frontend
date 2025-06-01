import React, { useState, useEffect } from "react";
import { getModules } from "../../services/ModuleService";
import { getTopics } from "../../services/TopicService";
import "../../styles/components/Home/HomeContent.css";
import Toast from "../global/Toast";

const getReadableError = (error: any): string => {
  // Network errors
  if (!navigator.onLine) {
    return "You appear to be offline. Please check your internet connection.";
  }

  // Handle specific error types
  if (error?.response?.status === 401) {
    return "Your session has expired. Please log in again.";
  }
  if (error?.response?.status === 403) {
    return "You don't have permission to access these modules.";
  }
  if (error?.response?.status === 404) {
    return "The requested modules could not be found.";
  }
  if (error?.response?.status >= 500) {
    return "We're having trouble connecting to our servers. Please try again in a few minutes.";
  }

  // If we have a specific error message, use it
  if (error?.message && typeof error.message === "string") {
    return error.message;
  }

  // Default fallback
  return "Unable to load modules. Please try again later.";
};

const HomeContent: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedModule, setSelectedModule] = useState<null | {
    moduleId: string;
    name: string;
    noOfTopics: number;
    noOfSubTopics: number;
  }>(null);
  const [modules, setModules] = useState<
    {
      moduleId: string;
      name: string;
      noOfTopics: number;
      noOfSubTopics: number;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  } | null>(null);
  const [topicsByName, setTopicsByName] = useState<{
    [topicName: string]: { subTopicName: string; subTopicId: number }[];
  }>({});
  const [topicsLoading, setTopicsLoading] = useState(false);
  const [topicsError, setTopicsError] = useState<string | null>(null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<number | null>(null);
  const [difficultyFilter, setDifficultyFilter] = useState<string>("All");

  useEffect(() => {
    setLoading(true);
    getModules()
      .then((res) => {
        if (!res.modules || res.modules.length === 0) {
          throw new Error("No modules are currently available.");
        }
        setModules(res.modules);
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = getReadableError(err);
        setToast({
          message: errorMessage,
          type: "error",
        });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedModule) {
      setTopicsLoading(true);
      setTopicsError(null);
      getTopics({ moduleId: selectedModule.moduleId, accessToken: "" })
        .then((res) => {
          if (!res.topics || res.topics.length === 0) {
            throw new Error("No topics are available for this module yet.");
          }
          const grouped: {
            [topicName: string]: { subTopicName: string; subTopicId: number }[];
          } = {};
          res.topics.forEach((item) => {
            if (!grouped[item.topicName]) grouped[item.topicName] = [];
            grouped[item.topicName].push({
              subTopicName: item.subTopicName,
              subTopicId: item.subTopicId,
            });
          });
          setTopicsByName(grouped);
          setTopicsLoading(false);
        })
        .catch((err) => {
          const errorMessage = getReadableError(err);
          setToast({
            message: errorMessage,
            type: "error",
          });
          setTopicsLoading(false);
          // Close the popup when there's an error
          setSelectedModule(null);
        });
    } else {
      setTopicsByName({});
    }
  }, [selectedModule]);

  const filteredModules = modules.filter((mod) =>
    mod.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard-content-section">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header__top">
          <div className="dashboard-header__welcome-bar">
            <span className="greeting">
              <span className="greeting-highlight">Modules</span>
            </span>
          </div>
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

        {/* Topic Filter Chips Row */}
        <div className="module-topic-chips-container">
          <div
            className={`module-topic-chip${
              difficultyFilter === "All" ? " module-topic-chip--active" : ""
            }`}
            onClick={() => setDifficultyFilter("All")}
          >
            <i className="fas fa-archive module-topic-chip__icon"></i>
            All Topics
          </div>
          <div
            className={`module-topic-chip${
              difficultyFilter === "Easy" ? " module-topic-chip--active" : ""
            }`}
            onClick={() => setDifficultyFilter("Easy")}
          >
            <i className="fas fa-project-diagram module-topic-chip__icon"></i>
            Beginner
          </div>
          <div
            className={`module-topic-chip${
              difficultyFilter === "Medium" ? " module-topic-chip--active" : ""
            }`}
            onClick={() => setDifficultyFilter("Medium")}
          >
            <i className="fas fa-database module-topic-chip__icon"></i>
            Intermediate
          </div>
          <div
            className={`module-topic-chip${
              difficultyFilter === "Hard" ? " module-topic-chip--active" : ""
            }`}
            onClick={() => setDifficultyFilter("Hard")}
          >
            <i className="fas fa-dollar-sign module-topic-chip__icon"></i>
            Advanced
          </div>
        </div>
      </div>{" "}
      {/* Module Selection Panel */}
      <div className="module-grid">
        {loading ? (
          <div>Loading modules...</div>
        ) : filteredModules.length === 0 ? (
          <div>No modules found.</div>
        ) : (
          filteredModules.flatMap((mod) => {
            const difficulties = [
              { label: "Easy", color: "easy" },
              { label: "Medium", color: "medium" },
              { label: "Hard", color: "hard" },
            ];
            return difficulties
              .filter(
                (diff) =>
                  difficultyFilter === "All" || diff.label === difficultyFilter
              )
              .map((diff) => {
                const firstLetter = mod.name[0].toUpperCase();
                return (
                  <div
                    key={mod.moduleId + "-" + diff.label}
                    className="module-tile"
                  >
                    {/* Difficulty Tag instead of dropdown */}
                    <div
                      className={`module-tile__difficulty-tag module-tile__difficulty-tag--${diff.color}`}
                    >
                      {diff.label}
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
                      <span className="module-tile__discuss-arrow-circle">
                        →
                      </span>
                    </button>
                    <div className="module-tile__main-content">
                      <span
                        className={`module-tile__circle module-tile__circle--${diff.color}`}
                        aria-label={firstLetter}
                      >
                        {firstLetter}
                      </span>
                      <div className="module-tile__info">
                        <div className="module-tile__name">{mod.name}</div>
                        <div className="module-tile__id">{mod.moduleId}</div>
                      </div>
                    </div>
                  </div>
                );
              });
          })
        )}
      </div>
      {/* Topic Selection Panel */}
      {selectedModule && (
        <div
          className="topic-selection-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
          <div
            className="topic-selection-panel"
            style={{
              background: "#18181b",
              borderRadius: 16,
              minWidth: 400,
              maxWidth: 480,
              width: "90vw",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
              padding: "2.5rem 2rem 2rem 2rem",
              color: "#fff",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <button
              className="close-button"
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: 28,
                cursor: "pointer",
                transition: "color 0.2s",
                zIndex: 2,
              }}
              onClick={() => setSelectedModule(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2
              style={{
                fontWeight: 600,
                fontSize: 24,
                marginBottom: 8,
                color: "#fff",
              }}
            >
              {selectedModule.name}
            </h2>
            {topicsLoading ? (
              <div style={{ color: "#bbb" }}>Loading topics...</div>
            ) : Object.keys(topicsByName).length === 0 ? (
              <div style={{ color: "#bbb" }}>No topics found.</div>
            ) : (
              <ul
                className="topic-list"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {Object.entries(topicsByName).map(([topicName, subtopics]) => (
                  <li
                    key={topicName}
                    className={selectedTopic === topicName ? "selected" : ""}
                    style={{
                      background:
                        expandedTopic === topicName ? "#23232a" : "transparent",
                      borderRadius: 10,
                      marginBottom: 8,
                      padding: "0.7rem 1.1rem",
                      cursor: "pointer",
                      color: "#fff",
                      fontWeight: 500,
                      transition: "background 0.18s",
                    }}
                    onClick={() => {
                      setExpandedTopic(
                        expandedTopic === topicName ? null : topicName
                      );
                      setSelectedTopic(topicName);
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {topicName}
                      <span
                        style={{
                          marginLeft: 8,
                          fontSize: 18,
                          transition: "transform 0.2s",
                        }}
                      >
                        {expandedTopic === topicName ? "▾" : "▸"}
                      </span>
                    </span>
                    {expandedTopic === topicName && (
                      <ul
                        className="subtopic-list"
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "0.5rem 0 0 0.5rem",
                        }}
                      >
                        {subtopics.map((sub) => (
                          <li
                            key={sub.subTopicId}
                            className={
                              selectedSubtopic === sub.subTopicId
                                ? "selected"
                                : ""
                            }
                            style={{
                              background:
                                selectedSubtopic === sub.subTopicId
                                  ? "#2d2d36"
                                  : "transparent",
                              borderRadius: 8,
                              marginBottom: 4,
                              padding: "0.5rem 1rem",
                              color: "#e0e0e0",
                              fontWeight: 400,
                              cursor: "pointer",
                              transition: "background 0.18s, color 0.18s",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSubtopic(sub.subTopicId);
                            }}
                          >
                            {sub.subTopicName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
