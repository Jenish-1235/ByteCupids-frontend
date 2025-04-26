import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import "../styles/pages/LabTopics.css";

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
          {/* Later: List of research papers, blogs, books */}
        </div>

        <div className="lab-topics-center-panel">
          <div className="lab-topics-user-progress">
            <h2>Module: {selectedModule.Module}</h2>
            <img src={selectedModule.image} alt={selectedModule.Module} />
            {/* Later: Show Progress Bar, Badges */}
          </div>
          <div className="lab-topics-module-topics">
            <h2>Topics List</h2>
            {/* Later: Dynamic list of topics */}
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
