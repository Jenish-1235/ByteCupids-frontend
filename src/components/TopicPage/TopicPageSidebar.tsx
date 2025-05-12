import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/TopicPage/TopicPageSidebar.css";

interface TopicPageSidebarProps {
  moduleName: string;
  topics: string[];
  currentTopic: string;
  onTopicSelect: (topic: string) => void;
}

const TopicPageSidebar: React.FC<TopicPageSidebarProps> = ({
  moduleName,
  topics,
  currentTopic,
  onTopicSelect,
}) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className="topic-page-sidebar">
      <button className="sidebar-back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="sidebar-module-name">{moduleName}</div>
      <div
        className="sidebar-topics-toggle"
        onClick={() => setCollapsed((c) => !c)}
      >
        Topics {collapsed ? "▼" : "▲"}
      </div>
      <ul className={`sidebar-topics-list${collapsed ? " collapsed" : ""}`}>
        {topics.map((topic) => (
          <li
            key={topic}
            className={
              "sidebar-topic-item" +
              (topic === currentTopic ? " active" : "")
            }
            onClick={() => onTopicSelect(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TopicPageSidebar;