import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/components/Dashboard/TopicSelectorPopup.css";
import { Topic, Subtopic } from "../../types/TopicTypes";
interface TopicSelectorPopupProps {
  moduleId: string;
  open: boolean;
  onClose: () => void;
}

const TopicSelectorPopup: React.FC<TopicSelectorPopupProps> = ({
  moduleId,
  open,
  onClose,
}) => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
  const [subtopics, setSubtopics] = useState<{ [topicId: string]: Subtopic[] }>(
    {}
  );

  useEffect(() => {
    if (open) {
      // Example: 10 legit topics for a React module (temporary, can be replaced)
      setTopics([
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
      ]);
    }
  }, [open, moduleId]);

  const handleExpand = (topicId: string) => {
    setExpandedTopicId(topicId === expandedTopicId ? null : topicId);
    if (!subtopics[topicId]) {
      // Example: 5-9 legit subtopics for each topic
      let subList: Subtopic[] = [];
      switch (topicId) {
        case "1":
          subList = [
            { id: "1a", name: "What is JSX?" },
            { id: "1b", name: "Embedding Expressions" },
            { id: "1c", name: "JSX vs HTML" },
            { id: "1d", name: "JSX Gotchas" },
            { id: "1e", name: "Rendering Elements" },
          ];
          break;
        case "2":
          subList = [
            { id: "2a", name: "Function Components" },
            { id: "2b", name: "Class Components" },
            { id: "2c", name: "Props Basics" },
            { id: "2d", name: "Default Props" },
            { id: "2e", name: "PropTypes" },
            { id: "2f", name: "Children Prop" },
          ];
          break;
        case "3":
          subList = [
            { id: "3a", name: "State in Class Components" },
            { id: "3b", name: "State in Function Components" },
            { id: "3c", name: "setState Usage" },
            { id: "3d", name: "Lifecycle Methods" },
            { id: "3e", name: "Mounting & Unmounting" },
            { id: "3f", name: "Updating State" },
          ];
          break;
        case "4":
          subList = [
            { id: "4a", name: "Handling Events" },
            { id: "4b", name: "Passing Arguments" },
            { id: "4c", name: "Synthetic Events" },
            { id: "4d", name: "Event Pooling" },
            { id: "4e", name: "PreventDefault & StopPropagation" },
          ];
          break;
        case "5":
          subList = [
            { id: "5a", name: "if/else in JSX" },
            { id: "5b", name: "Element Variables" },
            { id: "5c", name: "Ternary Operator" },
            { id: "5d", name: "Short-circuit &&" },
            { id: "5e", name: "Switch Case Patterns" },
          ];
          break;
        case "6":
          subList = [
            { id: "6a", name: "Rendering Lists" },
            { id: "6b", name: "Keys in React" },
            { id: "6c", name: "Unique Keys" },
            { id: "6d", name: "List Component Patterns" },
            { id: "6e", name: "Index as Key" },
          ];
          break;
        case "7":
          subList = [
            { id: "7a", name: "Controlled Components" },
            { id: "7b", name: "Uncontrolled Components" },
            { id: "7c", name: "Handling Input" },
            { id: "7d", name: "Textarea & Select" },
            { id: "7e", name: "Form Submission" },
            { id: "7f", name: "Validation" },
          ];
          break;
        case "8":
          subList = [
            { id: "8a", name: "useState Hook" },
            { id: "8b", name: "useEffect Hook" },
            { id: "8c", name: "Effect Cleanup" },
            { id: "8d", name: "Multiple useEffect" },
            { id: "8e", name: "Rules of Hooks" },
            { id: "8f", name: "Custom Hooks" },
            { id: "8g", name: "Hook Dependencies" },
          ];
          break;
        case "9":
          subList = [
            { id: "9a", name: "Context Basics" },
            { id: "9b", name: "Provider & Consumer" },
            { id: "9c", name: "Updating Context" },
            { id: "9d", name: "Context with Hooks" },
            { id: "9e", name: "Context Best Practices" },
          ];
          break;
        case "10":
          subList = [
            { id: "10a", name: "React Router Basics" },
            { id: "10b", name: "Route Matching" },
            { id: "10c", name: "Link & NavLink" },
            { id: "10d", name: "useNavigate/useHistory" },
            { id: "10e", name: "Nested Routes" },
            { id: "10f", name: "Route Params" },
            { id: "10g", name: "Redirects" },
            { id: "10h", name: "404 Handling" },
          ];
          break;
        default:
          subList = [{ id: topicId + "x", name: "Subtopic" }];
      }
      setSubtopics((prev) => ({ ...prev, [topicId]: subList }));
    }
  };

  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-window">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        <h2 className="popup-title">Select Topic</h2>
        <div className="topic-list">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-item">
              <div
                className="topic-header"
                onClick={() => handleExpand(topic.id)}
              >
                {topic.name}
                <span className="expand-arrow">
                  {expandedTopicId === topic.id ? "▼" : "▶"}
                </span>
              </div>
              {expandedTopicId === topic.id && (
                <div className="subtopic-list">
                  {(subtopics[topic.id] || []).map((sub) => (
                    <div
                      key={sub.id}
                      className="subtopic-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(
                          `/module/${moduleId}/topic/${topic.id}/subtopic/${sub.id}`
                        );
                        onClose();
                      }}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicSelectorPopup;
