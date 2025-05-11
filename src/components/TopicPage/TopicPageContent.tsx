import React from "react";
import TopicContent from "./TopicContent";
import "../../styles/components/TopicPage/TopicContent.css";

interface TopicPageContentProps {
  content: string;
}

const TopicPageContent: React.FC<TopicPageContentProps> = ({ content }) => (
  <div className="topic-content-outer">
    <TopicContent content={content} />
  </div>
);

export default TopicPageContent;
