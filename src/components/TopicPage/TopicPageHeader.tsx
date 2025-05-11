import React from "react";

interface TopicPageHeaderProps {
  topicName: string;
  subtopicName: string;
  onPrev: () => void;
  onNext: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

const TopicPageHeader: React.FC<TopicPageHeaderProps> = ({
  topicName,
  subtopicName,
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}) => (
  <header className="header">
    <div className="greeting">
      <span className="header-topic-name">{topicName}</span>
      <span>→</span>
      <span className="subtopic">{subtopicName}</span>
    </div>
    <div className="profile topic-header-nav">
      <span
        className="header-nav-btn"
        aria-disabled={prevDisabled}
        onClick={prevDisabled ? undefined : onPrev}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="#7fffd4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className="header-nav-btn"
        aria-disabled={nextDisabled}
        onClick={nextDisabled ? undefined : onNext}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="#7fffd4"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  </header>
);

export default TopicPageHeader;
