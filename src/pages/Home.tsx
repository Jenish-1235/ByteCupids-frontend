import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Header from "../components/Home/Header";
import Modules from "../components/Home/Modules";
import "../styles/pages/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page cursor-bg">
      {/* Global glow effects at different positions */}
      <div className="global-glow glow-top"></div>
      <div className="global-glow glow-middle"></div>
      <div className="global-glow glow-bottom"></div>
      
      <div className="branding-cemented">
        <span>ByteCupids</span>
      </div>
      <Sidebar />
      <main className="main">
        <Header userName="Jenish-1235"/>
        <Modules />
      </main>
    </div>
  );
};

export default Home;
