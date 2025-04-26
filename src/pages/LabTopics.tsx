import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import SpaceScene from "../components/LaunchLab/SpaceScene";
import ModulesPanel from "../components/LabModules/ModulesPanel";
import "../styles/pages/LabModules.css";

export default function LabModules() {
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
      <div className="lab-Modules-content">
        <ModulesPanel />
      </div>
    </>
  );
}
