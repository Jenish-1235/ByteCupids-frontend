import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Home/Sidebar";
import SidebarParticles from "../components/Home/SidebarParticles";
import DashboardParticles from "../components/Home/DashboardParticles";
import TopicPageHeader from "../components/TopicPage/TopicPageHeader";
import TopicPageContent from "../components/TopicPage/TopicPageContent";
import TopicPageRightbar from "../components/TopicPage/TopicPageRightbar";
import "../styles/components/Dashboard/Sidebar.css";
import "../styles/components/TopicPage/TopicContent.css";
import "../styles/components/TopicPage/TopicPageRightbar.css";
import "../styles/components/Dashboard/Modules.css";


const dummyTopics = [
  { id: "1", name: "JSX & Rendering" },
  { id: "2", name: "Components & Props" },
  { id: "3", name: "State & Lifecycle" },
  { id: "4", name: "Event Handling" },
  { id: "5", name: "Conditional Rendering" },
  { id: "6", name: "Lists & Keys" },
  { id: "7", name: "Forms in React" },
  { id: "8", name: "Hooks (useState, useEffect)" },
  { id: "9", name: "Context API" },
  { id: "10", name: "React Router" },
];

const dummySubtopics: { [key: string]: { id: string; name: string }[] } = {
  "1": [
    { id: "1a", name: "What is JSX?" },
    { id: "1b", name: "Embedding Expressions" },
    { id: "1c", name: "JSX vs HTML" },
    { id: "1d", name: "JSX Gotchas" },
    { id: "1e", name: "Rendering Elements" },
  ],
  // ... add more as needed
};

const TopicPage: React.FC = () => {
  const { moduleId, topicId, subtopicId } = useParams();
  const navigate = useNavigate();

  // Find current topic and subtopic
  const topicIdx = dummyTopics.findIndex((t) => t.id === topicId);
  const topic = dummyTopics[topicIdx];
  const subtopics = dummySubtopics[topicId || ""] || [];
  const subtopicIdx = subtopics.findIndex((s) => s.id === subtopicId);
  const subtopic = subtopics[subtopicIdx];

  // Navigation handlers
  const goPrev = () => {
    if (subtopicIdx > 0) {
      // Go to previous subtopic in same topic
      const prevSub = subtopics[subtopicIdx - 1];
      navigate(`/module/${moduleId}/topic/${topicId}/subtopic/${prevSub.id}`);
    } else if (topicIdx > 0) {
      // Go to last subtopic of previous topic
      const prevTopic = dummyTopics[topicIdx - 1];
      const prevSubs = dummySubtopics[prevTopic.id] || [];
      const lastSub = prevSubs[prevSubs.length - 1];
      navigate(
        `/module/${moduleId}/topic/${prevTopic.id}/subtopic/${
          lastSub ? lastSub.id : ""
        }`
      );
    }
  };
  const goNext = () => {
    if (subtopicIdx < subtopics.length - 1) {
      // Go to next subtopic in same topic
      const nextSub = subtopics[subtopicIdx + 1];
      navigate(`/module/${moduleId}/topic/${topicId}/subtopic/${nextSub.id}`);
    } else if (topicIdx < dummyTopics.length - 1) {
      // Go to first subtopic of next topic
      const nextTopic = dummyTopics[topicIdx + 1];
      const nextSubs = dummySubtopics[nextTopic.id] || [];
      const firstSub = nextSubs[0];
      navigate(
        `/module/${moduleId}/topic/${nextTopic.id}/subtopic/${
          firstSub ? firstSub.id : ""
        }`
      );
    }
  };

  return (
    <div className="container">
      <DashboardParticles />
      <SidebarParticles />
      <Sidebar />
      <main
        className="main"
        style={{ display: "flex", width: "100%", gap: "2.5rem" }}
      >
        {/* Header with topic and subtopic name and nav icons */}
        <div style={{ width: "100%" }}>
          <TopicPageHeader
            topicName={topic?.name || "Topic"}
            subtopicName={subtopic?.name || ""}
            onPrev={goPrev}
            onNext={goNext}
            prevDisabled={topicIdx <= 0 && subtopicIdx <= 0}
            nextDisabled={
              subtopics.length === 0 ||
              (topicIdx === dummyTopics.length - 1 &&
                (subtopicIdx === subtopics.length - 1 ||
                  subtopics.length === 0)) ||
              (subtopicIdx === subtopics.length - 1 &&
                topicIdx === dummyTopics.length - 1)
            }
          />
          <div style={{ display: "flex", gap: "2.5rem" }}>
            {/* Left: Reading content */}
            <TopicPageContent content={`content content content`} />
            {/* Right: 4 clickable divs */}
            <TopicPageRightbar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopicPage;
