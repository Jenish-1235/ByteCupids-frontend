import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import "../styles/pages/LabTopics.css";
import TopicTile from "../components/LabTopics/TopicTile";
import LibraryResourceTile from "../components/LabTopics/LibraryResourceTile";
import { getTopics } from "../services/TopicService";
import { Topic } from "../types/Topic";

export default function LabTopics() {
  const selectedModule = useLocation().state as {
    moduleId: string;
    Module: string;
    image: string;
  };
  const navigate = useNavigate();

  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    if (!selectedModule) {
      console.error("No module selected");
      navigate("/labmodules", { replace: true });
    }

    const payload = {
      moduleId: selectedModule.moduleId,
      accessToken: "your_access_token_here", // Replace with actual token
    };
    const fetchTopics = async () => {
      try {
        const response = await getTopics(payload);
        console.log("Topics fetched successfully:", response);
        setTopics(response.topics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    }
    fetchTopics();

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
              {
                topics.map((topic, index) => (
                  <TopicTile
                    key={topic.topicId}
                    index={index + 1}
                    moduleId={selectedModule.moduleId}
                    topicId={topic.topicId}
                    topicName={topic.topicName}
                    noOfLabs={topic.noOfLabs}
                    onClick={() => {
                      navigate("/labtopics/lab", {
                        state: {
                          moduleId: selectedModule.moduleId,
                          topicId: topic.topicId,
                          topicName: topic.topicName,
                        },
                      });
                    }}
                  />
                ))
              }
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
