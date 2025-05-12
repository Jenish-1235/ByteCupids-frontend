import React, { useRef } from "react";
import "../../styles/components/Home/ModuleTabBar.css";

interface ModuleTabBarProps {
  modules: string[];
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const ModuleTabBar: React.FC<ModuleTabBarProps> = ({
  modules,
  activeModule,
  onModuleChange,
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  return (
    <div className="module-tab-bar-wrapper">
      <div className="module-tab-bar" ref={barRef}>
        {modules.map((module) => (
          <button
            key={module}
            className={`module-tab${activeModule === module ? " active" : ""}`}
            onClick={() => onModuleChange(module)}
            type="button"
          >
            {module}
            {activeModule === module && <span className="module-tab-underline" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleTabBar;