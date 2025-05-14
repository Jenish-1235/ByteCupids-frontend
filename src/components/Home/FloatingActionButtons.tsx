import React, { useState } from "react";
import "../../styles/components/Home/FloatingActionButtons.css";
import { FaMicrophone, FaPenFancy, FaTimes } from "react-icons/fa";

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

const FloatingActionButtons: React.FC = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActionClick = (idx: number) => {
    if (idx === 0) {
      // Learn with discussion: navigate or show alert for now
      alert("Navigate to Learn with Discussion page (to be implemented)");
    } else {
      alert(`Open Problem: ${actions[idx]}`);
    }
  };

  return isMobile ? (
    <div className="fab-container">
      {/* Mic Icon */}
      <button
        className="fab fab-mic"
        aria-label="Learn with discussion"
        onClick={() => handleActionClick(0)}
        style={{ background: "var(--color-rose-gold)", color: "#fff" }}
      >
        <FaMicrophone />
      </button>
      {/* Pen Icon */}
      <button
        className="fab fab-pen"
        aria-label="Choose question to practice"
        onClick={() => setShowPanel(true)}
        style={{ background: "var(--color-rose-gold)", color: "#fff" }}
      >
        <FaPenFancy />
      </button>
      {/* Pop-up Panel */}
      {showPanel && (
        <div
          className="fab-popup-panel"
          style={{
            background: "var(--color-bg-primary)",
            color: "var(--color-text-primary)",
          }}
        >
          <div className="fab-popup-header">
            <span></span>
            <button
              className="fab-popup-close"
              onClick={() => setShowPanel(false)}
              aria-label="Close panel"
            >
              <FaTimes />
            </button>
          </div>
          <div className="fab-popup-content">
            <ul>
             
              {/* Problems with read more/less */}
              {actions.slice(1).map((action, idx) => (
                <li key={action}>
                  <span style={{ fontWeight: 700 , color: "var(--color-rose-gold)" }}>{action}</span>
                  <span
                    className="fab-popup-problem-text"
                    style={{ marginTop: 4, display: "block" }}
                  >
                    {expandedIdx === idx
                      ? problemStatements[idx]
                      : getTruncatedText(
                          problemStatements[idx],
                          TRUNCATE_WORDS
                        )}
                  </span>
                  {problemStatements[idx].split(/\s+/).length >
                    TRUNCATE_WORDS && (
                    <button
                      className="fab-popup-readmore"
                      onClick={() =>
                        setExpandedIdx(expandedIdx === idx ? null : idx)
                      }
                      style={{color: "var(--color-rose-gold)"}}
                    >
                      {expandedIdx === idx ? "Read Less" : "Read More"}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  ) : null;
};

export default FloatingActionButtons;
