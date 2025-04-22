import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import TopicsPanel from "../components/LabTopics/TopicsPanel";
import "../styles/components/LabTopicsStyles/LabTopics.css";

export default function LabTopics() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn || !user) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, user, navigate]);

  return (
    <>
      <SpaceScene />
      <div className="lab-topics-content">
        <TopicsPanel />
      </div>
    </>
  );
}
