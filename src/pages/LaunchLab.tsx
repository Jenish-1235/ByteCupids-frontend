import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/pages/LaunchLab.css";
import { useEffect } from "react";
import OrbitButton from "../components/LaunchLab/OrbitButton";
import SpaceScene from "../components/LaunchLab/SpaceScene";

export default function LaunchLab() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !user) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, user, navigate]);

  return (
    <div className="launch-lab-container">
      <SpaceScene
        onEnter={() => {
          alert("Launch Lab is not available yet. Please check back later.");
        }}
      />
      <div className="launch-lab-content">
        <h1 className="launch-lab-title">Hello, {user?.username}</h1>
        <h3 className="launch-lab-tagline">Learning starts here... 🚀</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <OrbitButton />
        </div>
      </div>
    </div>
  );
}
