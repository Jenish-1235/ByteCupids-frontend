import ModuleTile from "./ModuleTile";
import "../../styles/components/LabModulesStyles/ModulesPanel.css";

const Modules = [
  "Computer Architecture",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networking",
  "High-Level System Design",
  "Cloud Computing",
  "Artificial Intelligence Fundamentals & MLOps",
  "Software Engineering Practices & Workflows",
  "DevOps & Tooling in Practice",
  "Java Internals",
  "Cybersecurity & Ethical Hacking",
  "Data Structures & Algorithms",
];


const ModuleImages: Record<(typeof Modules)[number], string> = {
  "Operating Systems": "https://img.icons8.com/color/96/linux--v1.png",
  "Computer Architecture": "https://img.icons8.com/color/96/motherboard.png",
  "Data Structures & Algorithms":
    "https://img.icons8.com/color/96/flow-chart.png",
  "Database Management Systems": "https://img.icons8.com/color/96/database.png",
  "Computer Networking":
    "https://img.icons8.com/color/96/networking-manager.png",
  "Java Internals": "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
  "Software Engineering Practices & Workflows":
    "https://img.icons8.com/color/96/developer.png",
  "High-Level System Design":
    "https://img.icons8.com/?size=80&id=zdWxmtYiP4yt&format=png&color=ffffff",
  "DevOps & Tooling in Practice":
    "https://img.icons8.com/color/96/cloud-checked--v1.png",
  "Cloud Computing": "https://img.icons8.com/color/96/cloud.png",
  "Cybersecurity & Ethical Hacking":
    "https://img.icons8.com/color/96/security-checked.png",
  "Artificial Intelligence Fundamentals & MLOps":
    "https://img.icons8.com/color/96/artificial-intelligence.png",
};


export default function ModulesPanel() {
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
            <ModuleTile Module={Module} image={ModuleImages[Module]} />
          </div>
        );
      })}

      {rightModules.map((Module, index) => {
        const { left, top } = getGridPosition(index, true);
        return (
          <div key={index + 6} style={{ position: "absolute", left, top }}>
            <ModuleTile Module={Module} image={ModuleImages[Module]} />
          </div>
        );
      })}
    </div>
  );
}
