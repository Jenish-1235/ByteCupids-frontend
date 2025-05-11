import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Modules from "../components/Dashboard/Modules";
import "../styles/pages/Dashboard.css";
import DashboardParticles from "../components/Dashboard/DashboardParticles";
import SidebarParticles from "../components/Dashboard/SidebarParticles";

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <DashboardParticles />
      <SidebarParticles />
      <Sidebar />
      <main className="main">
        <Header />
        <Modules />
      </main>
    </div>
  );
};

export default Dashboard;
