import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/pages/LaunchLab.css";
import { useEffect } from "react";
import Stars from "../components/LaunchLab/Stars";
// Import Particles component

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
      {/* Particle component should be inside the Launch Lab and be in the background */}

      <div className="launch-lab-content">
        <div className="left-pane">
          <Stars />
        </div>

        <div className="right-pane">
          <div className="launch-lab-image-container">
            <img
              src="https://via.placeholder.com/400"
              alt="Launch Lab Illustration"
              className="launch-lab-image"
            />
            <div className="launch-lab-image-overlay"></div>
            <div className="launch-lab-image-text">
              <h2 className="image-title">Unleash Your Creativity</h2>
              <p className="image-description">
                Join us in the Launch Lab and take your ideas to the next level.
                Collaborate, innovate, and create amazing experiences together!
              </p>
              <button className="get-started-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
