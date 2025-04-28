import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/pages/LaunchLab.css";
import { useEffect } from "react";
import OrbitButton from "../components/LaunchLab/OrbitButton";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import MainBubble from "../components/LaunchLab/MainBubble";
import FloatingFacts from "../components/LaunchLab/FloatingFacts";

export default function LaunchLab() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !user) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, user, navigate]);

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        navigate("/labmodules", { replace: true });
      }
    };

    document.addEventListener("keydown", handleSpace);
    return () => document.removeEventListener("keydown", handleSpace);
  }, []);

  return (
    <div className="launch-lab-container">
      <SpaceScene />
      <FloatingFacts />
      <div className="launch-lab-content">
        <MainBubble>
          <h1 className="launch-lab-title">Hello, {user?.username}</h1>
          <h3 className="launch-lab-tagline">Learning starts here...</h3>
          <OrbitButton />
        </MainBubble>
      </div>
    </div>
  );
}
