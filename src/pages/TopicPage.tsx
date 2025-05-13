import React from "react";
import TopicPageSidebar from "../components/TopicPage/TopicPageSidebar";
import TopBarMobile from "../components/Home/TopBarMobile";
import "../styles/pages/TopicPage.css";
import TopicPageHeader from "../components/TopicPage/TopicPageHeader";
import TopicContent from "../components/TopicPage/TopicContent";

// Dummy data for demonstration
const topics = [
  "CRUD Operations",
  "Index Design",
  "Normalization",
  "Joins",
  "Transactions",
];
const moduleName = "Relational Database Management System";

const TopicPage: React.FC = () => {
  // For demo, use state for sidebar content and userName
  const [currentSubtopic, setCurrentSubtopic] = React.useState(topics[1]);
  const userName = "Jenish-1235";

  // Sidebar content for both mobile and desktop, always in sync
  const sidebarContent = (
    <TopicPageSidebar
      topic={moduleName}
      currentSubtopic={currentSubtopic}
      subtopics={topics}
      onSubtopicSelect={setCurrentSubtopic}
    />
  );

  // Hide sidebar on mobile (handled by CSS), only show in drawer
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
      <TopBarMobile
        userName={userName}
        onLogout={() => alert("Logged out!")}
        children={sidebarContent}
      />
      {/* Desktop sidebar (hidden on mobile) */}
      <div className="topic-page-sidebar-desktop">{sidebarContent}</div>
      <main className="main">
        <TopicPageHeader
          moduleName="Indexes and Design"
          userName={userName}
          selectedTopic={currentSubtopic}
        />
        <TopicContent />
      </main>
    </div>
  );
};

export default TopicPage;
