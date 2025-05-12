import React from "react";

const topics = [
  {
    title: "Topic 1",
    subtopics: ["Sub-topic 1", "Sub-topic 2"],
  },
  {
    title: "Topic 2",
    subtopics: ["Sub-topic 1", "Sub-topic 2"],
  },
];

const Topics: React.FC = () => (
  <div className="topics-section">
    {topics.map((topic) => (
      <div className="topic-block" key={topic.title}>
        <div className="topic-title">{topic.title}</div>
        <ul className="subtopic-list">
          {topic.subtopics.map((sub, idx) => (
            <li className="subtopic-item" key={idx}>{sub}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Topics;