import React from "react";
import "../../styles/components/TopicPage/TopicPageHeader.css";

interface TopicPageHeaderProps {
  moduleName: string;
  userName: string;
  selectedTopic: string;
}

const TopicPageHeader: React.FC<TopicPageHeaderProps> = ({
  moduleName,
  userName,
  selectedTopic
}) => (
  <header className="topic-header">
    <div className="topic-header__bar">
      <span className="topic-header__module">{moduleName}</span>
      <span className="topic-header__user">{userName}</span>
    </div>
    <div className="topic-header__topic-bar">
      <span className="topic-header__topic">{selectedTopic}</span>
    </div>
  </header>
);

export default TopicPageHeader;
