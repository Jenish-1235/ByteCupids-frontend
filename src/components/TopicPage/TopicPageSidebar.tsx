import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/TopicPage/TopicPageSidebar.css";

interface TopicPageSidebarProps {
  topic: string;
  subtopics: string[];
  currentSubtopic: string;
  onSubtopicSelect: (subtopic: string) => void;
}

const TopicPageSidebar: React.FC<TopicPageSidebarProps> = ({
  topic,
  subtopics,
  currentSubtopic,
  onSubtopicSelect,
}) => {
  const navigate = useNavigate();

  return (
    <aside className="topic-page-sidebar">
      <div className="sidebar-topic-row">
        <button
          className="sidebar-back-btn-inline"
          onClick={() => navigate("/home")}
          aria-label="Back to Home"
        >
          <span className="sidebar__icon">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 9.5L10 4L17 9.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 17V10.5H15V17"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div className="sidebar-topic-title" title={topic}>{topic}</div>
      </div>
      <ul className="sidebar-subtopics-list">
        {subtopics.map((sub) => (
          <li
            key={sub}
            className={
              "sidebar-subtopic-item" +
              (sub === currentSubtopic ? " active" : "")
            }
            onClick={() => onSubtopicSelect(sub)}
            title={sub} // Tooltip for long names
          >
            {sub}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TopicPageSidebar;