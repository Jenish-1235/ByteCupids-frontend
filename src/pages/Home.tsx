import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Modules from "../components/Dashboard/Modules";
import "../styles/pages/Home.css";
import GlobalParticlesBackground from "../components/global/GlobalParticlesBackground";

const Home: React.FC = () => {
  return (
    <div className="container">
      <GlobalParticlesBackground />
      
      {/* Global glow effects at different positions */}
      <div className="global-glow glow-top"></div>
      <div className="global-glow glow-middle"></div>
      <div className="global-glow glow-bottom"></div>
      
      <Sidebar />
      <main className="main">
        <Header />
        <Modules />
      </main>
    </div>
  );
};

export default Home;
