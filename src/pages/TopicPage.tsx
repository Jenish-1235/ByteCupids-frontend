import React from "react";
import TopicPageSidebar from "../components/TopicPage/TopicPageSidebar";
import TopBarMobile from "../components/Home/TopBarMobile";
import "../styles/pages/TopicPage.css";

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
        {/* Add TopicPageHeader, ModuleTabBar (if needed), TopicPageContent, TopicPageRightbar here */}
        {/* Example placeholders: */}
        {/* <TopicPageHeader ... /> */}
        {/* <TopicPageContent ... /> */}
        {/* <TopicPageRightbar ... /> */}
      </main>
    </div>
  );
};

export default TopicPage;