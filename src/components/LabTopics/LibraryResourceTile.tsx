import "../../styles/components/LabTopicsStyles/LibraryResourceTile.css"
type ResourceType = "paper" | "blog" | "video" | "book" | "appendix"; // expand later

type LibraryResourceTileProps = {
  title: string;
  url: string;
  type: ResourceType;
};

export default function LibraryResourceTile({
  title,
  url,
  type,
}: LibraryResourceTileProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="library-tile"
    >
      <div className="library-tile-icon">{getIcon(type)}</div>
      <div className="library-tile-title">{title}</div>
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
