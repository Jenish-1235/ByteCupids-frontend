import React from "react";
import "../../styles/components/Home/HomeContent.css";
import Topics from "../Home/Topics";
import RightStatsPanel from "./RightStatsPanel";

const HomeContent: React.FC = () => (
  <div className="dashboard-content-section">
    <Topics />
    <RightStatsPanel />
  </div>
);

export default HomeContent;