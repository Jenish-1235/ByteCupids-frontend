import React from 'react';
import ContentMarkdown from './ContentMarkdown';
import remarkGfm from 'remark-gfm';
interface TopicContentProps {
  content: string;
}

const ArticleView: React.FC<TopicContentProps> = ({ content }) => (
  <div className="topic-page__content-markdown">
    <ContentMarkdown  />
  </div>
);

export default ArticleView;
