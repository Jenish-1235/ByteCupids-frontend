import React from "react";
import "../styles/Modules.css";

const Modules: React.FC = () => {
  const modules = [
    { name: "Introduction to React", topics: 8 },
    { name: "DSA", topics: 12 },
    { name: "System Design", topics: 10 },
    { name: "Operating System", topics: 7 },
    { name: "MySQL", topics: 5 },
  ];
  return (
   <div className="modules">
  {modules.map((mod, idx) => (
    <div key={idx} className="tile">
      <div className="moduleTitle">{mod.name}</div>
      <div className="moduleInfo">&bull; {mod.topics} Topics</div>
    </div>
  ))}
</div>

  );
};

export default Modules;
