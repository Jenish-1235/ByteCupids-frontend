import React from "react";
import "../../styles/components/Home/HomeContent.css";
import Topics from "../Home/Topics";
import Achievements from "./Achievements";

const HomeContent: React.FC = () => (
  <div className="dashboard-content-section">
    <Topics />
    <Achievements />
  </div>
);

export default HomeContent;