import React from "react";
import TopicPageSidebar from "../components/TopicPage/TopicPageSidebar";
import TopBarMobile from "../components/Home/TopBarMobile";
import "../styles/pages/TopicPage.css";
import TopicPageHeader from "../components/TopicPage/TopicPageHeader";
import TopicContent from "../components/TopicPage/TopicContent";

// Dummy data for demonstration
const topics = ["CAP Theorem", "Quoram"];
const moduleName = "System Design";

const TopicPage: React.FC = () => {
  return (
    <div className="topic-page cursor-bg">
      {/* Global glow effects at different positions */}
      <div className="global-glow glow-top"></div>
      <div className="global-glow glow-middle"></div>
      <div className="global-glow glow-bottom"></div>

      {/* Cemented branding */}
      <div className="branding-cemented">
        <span>ByteCupids</span>
      </div>
      <TopBarMobile />
      <TopicPageSidebar
        topic={moduleName}
        currentSubtopic={topics[0]}
        subtopics={topics}
        onSubtopicSelect={(currentSubtopic) => console.log(`Selected topic: ${currentSubtopic}`)}
      />
      <main className="main">
        <TopicPageHeader moduleName="System Design" userName="Jenish-1235" selectedTopic="CAP Theorem" />
        <TopicContent/>
      </main>
    </div>
  );
};

export default TopicPage;