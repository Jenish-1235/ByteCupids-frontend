import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Modules from "../components/Dashboard/Modules";
import "../styles/pages/Dashboard.css";
import GlobalParticlesBackground from "../components/global/GlobalParticlesBackground";

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <GlobalParticlesBackground />
      <Sidebar />
      <main className="main">
        <Header />
        <Modules />
      </main>
    </div>
  );
};

export default Dashboard;
