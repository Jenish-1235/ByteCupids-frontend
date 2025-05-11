import React from "react";
import "../../styles/components/Dashboard/Header.css";

interface HeaderProps {
  topicName?: string;
  subtopicName?: string;
  showNavIcons?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  topicName,
  subtopicName,
  showNavIcons,
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}) => (
  <header className="header">
    <div className="greeting">
      {topicName && <span className="header-topic-name">{topicName}</span>}
      {subtopicName && (
        <span className="header-subtopic">&rarr; {subtopicName}</span>
      )}
      {!topicName && !subtopicName && (
        <>
          Hello,<span className="username">Welcome Back!</span>
        </>
      )}
    </div>
    <div className="profile topic-header-nav">
      {showNavIcons ? (
        <div className="header-nav-btns">
          <span
            className="header-nav-btn"
            onClick={prevDisabled ? undefined : onPrev}
            aria-disabled={prevDisabled}
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
            onClick={nextDisabled ? undefined : onNext}
            aria-disabled={nextDisabled}
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
      ) : (
        <span className="profileName">User_Name</span>
      )}
    </div>
  </header>
);

export default Header;
