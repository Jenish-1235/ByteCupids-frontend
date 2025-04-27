import "../../styles/components/LabTopicsStyles/LibraryResourceTile.css"
import { LibraryResource } from "../../types/LibraryResource";
type ResourceType = "paper" | "blog" | "video" | "book" | "appendix"; // expand later


export default function LibraryResourceTile({ resourceId, moduleId, resourceType, resourceName, resourceUri}: LibraryResource) {
  const type: ResourceType = resourceType as ResourceType;
  return (
    <a
      href={resourceUri}
      target="_blank"
      rel="noopener noreferrer"
      className="library-tile"
    >
      <div className="library-tile-icon">{getIcon(type)}</div>
      <div className="library-tile-title">{resourceName}</div>
    </a>
  );
}

function getIcon(type: ResourceType) {
  switch (type) {
    case "paper":
      return "📄";
    case "blog":
      return "📝";
    case "video":
      return "🎥";
    case "book":
      return "📚";
    case "appendix":
      return "📁";
    default:
      return "🔗";
  }
}
