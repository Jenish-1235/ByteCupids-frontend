import React, { useState } from "react";
import "../../styles/components/TopicPage/ActionsPanelTooltip.css";

const actions = [
  "Learn with discussion",
  "problem 1",
  "problem 2",
  "problem 3",
];

const problemStatements = [
  "Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
  "Given a string, find the length of the longest substring without repeating characters. The solution should be efficient for large strings.",
  "Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).",
];

const TRUNCATE_WORDS = 10;

function getTruncatedText(text: string, numWords: number) {
  const words = text.split(/\s+/);
  if (words.length <= numWords) return text;
  return words.slice(0, numWords).join(" ") + "...";
}

const ActionsPanel: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Placeholder for visit action
  const handleVisit = (idx: number) => {
    // TODO: Implement navigation to problem statement page
    alert(`Visit Problem ${idx}`);
  };

  // Delayed hover handlers
  const handleMouseEnter = (i: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredIdx(i);
  };
  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setHoveredIdx(null), 200); // 200ms delay
  };

  return (
    <div className="topic-page__actions-panel">
      {/* Learn with discussion pill button */}
      <div
        className="actions-panel-discussion-pill"
        tabIndex={0}
        role="button"
        aria-label="Learn with discussion"
      >
        <div className="discussion-pill-bg">
          <span className="discussion-pill-text">Learn with discussion</span>
        </div>
        <div className="discussion-pill-arrow">
          <span className="arrow-circle" aria-hidden="true">
            →
          </span>
        </div>
      </div>
      {/* Stacked problem buttons */}
      {actions.slice(1).map((label, i) => {
        const idx = i + 1;
        return (
          <div
            key={idx}
            className="topic-page__action-tile"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave()}
            style={{ position: "relative" }}
          >
            {label}
            {hoveredIdx === idx && (
              <div
                className="actions-panel-tooltip visible"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="actions-panel-tooltip__arrow" />
                <div className="actions-panel-tooltip__header">
                  <span className="actions-panel-tooltip__title">
                    Problem Statement
                  </span>
                </div>
                <div
                  className="actions-panel-tooltip__content"
                  style={{
                    transition: "max-height 0.3s, opacity 0.3s",
                    overflow: expandedIdx === idx ? "auto" : "hidden",
                    textAlign: "left",
                    maxHeight: expandedIdx === idx ? "400px" : "5.2em",
                    whiteSpace: expandedIdx === idx ? "pre-line" : undefined,
                    display: "block",
                  }}
                >
                  {expandedIdx === idx
                    ? problemStatements[idx - 1]
                    : getTruncatedText(
                        problemStatements[idx - 1],
                        TRUNCATE_WORDS
                      )}
                </div>
                <div className="actions-panel-tooltip__footer">
                  {problemStatements[idx - 1].split(/\s+/).length >
                    TRUNCATE_WORDS && (
                    <button
                      className="actions-panel-tooltip__readmore"
                      style={{
                        color: "var(--color-neon-violet)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "underline",
                        marginRight: 12,
                      }}
                      onClick={() =>
                        setExpandedIdx(expandedIdx === idx ? null : idx)
                      }
                    >
                      {expandedIdx === idx ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <button
                    className="actions-panel-tooltip__visit"
                    onClick={() => handleVisit(idx)}
                  >
                    Visit
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActionsPanel;
