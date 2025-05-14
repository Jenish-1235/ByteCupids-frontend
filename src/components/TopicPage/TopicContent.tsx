import React from "react";
import ActionsPanel from "./ActionsPanel";
import ArticleView from "./ArticleView";
import FloatingActionButtons from "../Home/FloatingActionButtons";
import "../../styles/components/TopicPage/TopicContent.css";

const TopicContent: React.FC = () => (
    <div className="topic-content-section">
        <ArticleView content=""/>
        <ActionsPanel/>
        <FloatingActionButtons />
    </div>
);


export default TopicContent;
