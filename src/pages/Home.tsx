import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Header from "../components/Home/Header";
import Modules from "../components/Home/Modules";
import "../styles/pages/Home.css";

const Home: React.FC = () => {
  return (
    <div className="container cursor-bg">
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
