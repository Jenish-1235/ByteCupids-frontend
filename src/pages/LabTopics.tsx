import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import "../styles/pages/LabTopics.css";
import TopicTile from "../components/LabTopics/TopicTile";
import LibraryResourceTile from "../components/LabTopics/LibraryResourceTile";

export default function LabTopics() {
  const selectedModule = useLocation().state as {
    moduleId: string;
    Module: string;
    image: string;
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedModule) {
      console.error("No module selected");
      navigate("/labmodules", { replace: true });
    }
    // (Later) Make API call to get topics for selected module
  }, [selectedModule, navigate]);

  return (
    <>
      <SpaceScene />
      <div className="lab-topics-container">
        <div className="lab-topics-left-panel">
          <h1 className="lab-topics-title">Library</h1>
          <LibraryResourceTile
            title="Deep Dive into Virtual Memory"
            url="https://example.com/virtual-memory-paper"
            type="paper"
          />
          <LibraryResourceTile
            title="Kernel vs User Space Explained"
            url="https://example.com/kernel-blog"
            type="blog"
          />
          <LibraryResourceTile
            title="OS Internals - Youtube Lecture"
            url="https://youtube.com/example"
            type="video"
          />
        </div>

        <div className="lab-topics-center-panel">
          <div className="lab-topics-center-scrollable">
            <div className="lab-topics-user-progress">
              <h2>Module: {selectedModule.Module}</h2>
              {/* Progress bar, badges */}
            </div>
            <div className="lab-topics-module-topics">
              <h2>Topics List</h2>
              <TopicTile
                index={1}
                topicName="Introduction to Operating Systems"
                noOfLabs={4}
                onClick={() => console.log("Clicked Topic 1")}
              />
              <TopicTile
                index={2}
                topicName="Memory Management"
                noOfLabs={5}
                onClick={() => console.log("Clicked Topic 2")}
              />
              <TopicTile
                index={1}
                topicName="Introduction to Operating Systems"
                noOfLabs={4}
                onClick={() => console.log("Clicked Topic 1")}
              />
              <TopicTile
                index={2}
                topicName="Memory Management"
                noOfLabs={5}
                onClick={() => console.log("Clicked Topic 2")}
              />
              <TopicTile
                index={1}
                topicName="Introduction to Operating Systems"
                noOfLabs={4}
                onClick={() => console.log("Clicked Topic 1")}
              />
              <TopicTile
                index={2}
                topicName="Memory Management"
                noOfLabs={5}
                onClick={() => console.log("Clicked Topic 2")}
              />
              <TopicTile
                index={1}
                topicName="Introduction to Operating Systems"
                noOfLabs={4}
                onClick={() => console.log("Clicked Topic 1")}
              />
              <TopicTile
                index={2}
                topicName="Memory Management"
                noOfLabs={5}
                onClick={() => console.log("Clicked Topic 2")}
              />
            </div>
          </div>
        </div>

        <div className="lab-topics-right-panel">
          <h1 className="lab-topics-ai-chat">Gemini Chat</h1>
          {/* Later: Chat window */}
        </div>
      </div>
    </>
  );
}
