import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Header from "../components/Home/Header";
import "../styles/pages/Home.css";
import HomeContent from "../components/Home/HomeContent";
import TopBarMobile from "../components/Home/TopBarMobile";

const modules = [
  "Introduction to React",
  "DSA",
  "System Design",
  "Operating System",
  "MySQL",
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "C",
  "HTML",
  "CSS",
];
const Home: React.FC = () => {
  const [activeModule, setActiveModule] = React.useState(modules[0]);
  return (
    <div className="home-page cursor-bg">
      {/* Global glow effects at different positions */}
      <div className="global-glow glow-top"></div>
      <div className="global-glow glow-middle"></div>
      <div className="global-glow glow-bottom"></div>

      <div className="branding-cemented">
        <span>ByteCupids</span>
      </div>
      <TopBarMobile
        userName="Jenish-1235"
        onLogout={() => alert("Logged out!")}
        children={<Sidebar />}
      />

      <div className="home-page-sidebar-desktop">{<Sidebar />}</div>
      <main className="main">
        <HomeContent />
      </main>
    </div>
  );
};

export default Home;
