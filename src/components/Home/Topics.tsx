import React, { useState } from "react";

interface Topic {
  title: string;
  subtopics: string[];
}

interface TopicsProps {
  topics: Topic[];
}

const Topics: React.FC<TopicsProps> = ({ topics }) => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="topics-section topics-section--minimal">
      <div className="topics-list-minimal">
        {topics.map((topic, idx) => (
          <div
            className={`topic-row-minimal${openIdx === idx ? " open" : ""}`}
            key={topic.title + idx}
          >
            <div
              className="topic-title-minimal"
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              tabIndex={0}
              role="button"
              aria-expanded={openIdx === idx}
            >
              <span>{topic.title}</span>
              <span className="topic-arrow-minimal">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                    transform: openIdx === idx ? "rotate(0deg)" : "rotate(-90deg)",
                    transition: "transform 0.22s cubic-bezier(0.4,2,0.6,1)",
                  }}
                >
                  <path
                    d="M7 8L10 11L13 8"
                    stroke="var(--color-rose-gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <ul
              className="subtopic-list-minimal"
              style={{
                maxHeight: openIdx === idx ? "200px" : "0",
                opacity: openIdx === idx ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.32s cubic-bezier(0.4,2,0.6,1), opacity 0.22s",
                marginTop: openIdx === idx ? "0.5rem" : "0",
                marginBottom: openIdx === idx ? "1.2rem" : "0",
                pointerEvents: openIdx === idx ? "auto" : "none",
              }}
            >
              {topic.subtopics.map((sub, subIdx) => (
                <li className="subtopic-item-minimal" key={subIdx}>
                  <span className="subtopic-dot" />
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;