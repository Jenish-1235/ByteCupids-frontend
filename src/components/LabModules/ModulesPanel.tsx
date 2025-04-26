import ModuleTile from "./ModuleTile";
import "../../styles/components/LabModulesStyles/ModulesPanel.css";
import { getModules } from "../../services/ModuleService";
import { ModuleResponse } from "../../types/ModuleResponse";

import { useEffect, useState } from "react";

export default function ModulesPanel() {
  const [Modules, setModules] = useState<ModuleResponse["modules"]>([]);

  useEffect(() => {
    (async () => {
      const response: ModuleResponse = await getModules();

      if (response.code !== 200) {
        console.error("Error fetching modules:", response.message);
        return;
      }
      console.log("Modules fetched successfully:", response);
      setModules(response.modules);
    })();
  }, []);

  const tileSize = 160;
  const spacing = 30;
  const gridHeight = tileSize * 2 + spacing;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const leftStartX = centerX - 400 - tileSize * 3;
  const rightStartX = centerX + 400;

  const leftModules = Modules.slice(0, 6); // 3x2 = 6 tiles
  const rightModules = Modules.slice(6); // 4 tiles will center in the grid

  const getGridPosition = (index: number, isRight: boolean) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const x = (isRight ? rightStartX : leftStartX) + col * (tileSize + spacing);
    const y = centerY - gridHeight / 2 + row * (tileSize + spacing);
    return { left: x, top: y };
  };

  return (
    <div
      className="lab-Modules-panel"
      style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div className="main-bubble">Choose <br></br>Your<br></br> Journey... <br/> 🚀 </div>

      {leftModules.map((Module, index) => {
        const { left, top } = getGridPosition(index, false);
        return (
          <div key={index} style={{ position: "absolute", left, top }}>
            <ModuleTile Module={Module.name} image={Module.moduleImgUri} />
          </div>
        );
      })}

      {rightModules.map((Module, index) => {
        const { left, top } = getGridPosition(index, true);
        return (
          <div key={index + 6} style={{ position: "absolute", left, top }}>
            <ModuleTile Module={Module.name} image={Module.moduleImgUri} />
          </div>
        );
      })}
    </div>
  );
}
