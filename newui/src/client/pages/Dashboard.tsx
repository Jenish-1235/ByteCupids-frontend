import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Modules from "./Modules";
import "../styles/Dashboard.css";
import DashboardParticles from "./DashboardParticles";
import SidebarParticles from "./SidebarParticles";

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
