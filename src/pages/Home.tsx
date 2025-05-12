import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Header from "../components/Home/Header";
import Modules from "../components/Home/Modules";
import "../styles/pages/Home.css";
import ModuleTabBar from "../components/Home/ModuleTabBar";

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
      <Sidebar />
      <main className="main">
        <Header userName="Jenish-1235"/>
        <ModuleTabBar
        modules={modules}
        activeModule={activeModule}
        onModuleChange={setActiveModule}
        />
      </main>
    </div>
  );
};

export default Home;
