import TopicTile from "./TopicTile";
import "../../styles/components/LabTopicsStyles/TopicsPanel.css";

const topics = [
  "Operating Systems",
  "Computer Architecture",
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Computer Networking",
  "Java Internals",
  "Software Engineering Practices & Workflows",
  "High-Level System Design",
  "DevOps & Tooling in Practice",
  "Cloud Computing",
  "Cybersecurity & Ethical Hacking",
  "Artificial Intelligence Fundamentals & MLOps",
];


const topicImages: Record<(typeof topics)[number], string> = {
  "Operating Systems": "https://img.icons8.com/color/96/windows-10.png",
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
    "https://github.com/Jenish-1235/ByteCupids-frontend/blob/main/public/images/hld.png",
  "DevOps & Tooling in Practice":
    "https://img.icons8.com/color/96/cloud-checked--v1.png",
  "Cloud Computing": "https://img.icons8.com/color/96/cloud.png",
  "Cybersecurity & Ethical Hacking":
    "https://img.icons8.com/color/96/security-checked.png",
  "Artificial Intelligence Fundamentals & MLOps":
    "https://img.icons8.com/color/96/artificial-intelligence.png",
};


export default function TopicsPanel() {
  const tileSize = 160;
  const spacing = 30;
  const gridWidth = tileSize * 3 + spacing * 2;
  const gridHeight = tileSize * 2 + spacing;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const leftStartX = centerX - 400 - tileSize * 3;
  const rightStartX = centerX + 400;

  const leftTopics = topics.slice(0, 6); // 3x2 = 6 tiles
  const rightTopics = topics.slice(6); // 4 tiles will center in the grid

  const getGridPosition = (index: number, isRight: boolean) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const x = (isRight ? rightStartX : leftStartX) + col * (tileSize + spacing);
    const y = centerY - gridHeight / 2 + row * (tileSize + spacing);
    return { left: x, top: y };
  };

  return (
    <div
      className="lab-topics-panel"
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div className="main-bubble">Choose <br></br>Your<br></br> Journey... <br/> 🚀 </div>

      {leftTopics.map((topic, index) => {
        const { left, top } = getGridPosition(index, false);
        return (
          <div key={index} style={{ position: "absolute", left, top }}>
            <TopicTile topic={topic} image={topicImages[topic]} />
          </div>
        );
      })}

      {rightTopics.map((topic, index) => {
        const { left, top } = getGridPosition(index, true);
        return (
          <div key={index + 6} style={{ position: "absolute", left, top }}>
            <TopicTile topic={topic} image={topicImages[topic]} />
          </div>
        );
      })}
    </div>
  );
}
