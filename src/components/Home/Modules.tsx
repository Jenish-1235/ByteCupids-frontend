import React, { useState } from "react";
import "../../styles/components/Home/Modules.css";

const Modules: React.FC = () => {
  const [selectedModuleIdx, setSelectedModuleIdx] = useState<number | null>(
    null
  );
  const modules = [
    { name: "Introduction to React", topics: 8, id: "react" },
    { name: "DSA", topics: 12, id: "dsa" },
    { name: "System Design", topics: 10, id: "sysdesign" },
    { name: "Operating System", topics: 7, id: "os" },
    { name: "MySQL", topics: 5, id: "mysql" },
  ];
  return (
    <div className="modules">
      {modules.map((mod, idx) => (
        <div
          key={idx}
          className="tile"
          onClick={() => setSelectedModuleIdx(idx)}
          style={{ cursor: "pointer" }}
        >
          <div className="moduleTitle">{mod.name}</div>
          <div className="moduleInfo">&bull; {mod.topics} Topics</div>
        </div>
      ))}
    </div>
  );
};

export default Modules;
