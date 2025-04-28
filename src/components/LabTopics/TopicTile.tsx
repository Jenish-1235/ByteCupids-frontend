import "../../styles/components/LabTopicsStyles/TopicTile.css"
type TopicTileProps = {
    index: number;
    moduleId: string;
    topicId: string;
    topicName: string;
    noOfLabs: number;
    onClick: () => void;
};

export default function TopicTile({ index, moduleId, topicId, topicName, noOfLabs, onClick }: TopicTileProps) {
        return (
            <div className="topic-tile" onClick={onClick}>
                <div className="topic-tile-header">
                    <div className="topic-tile-index">{index}</div>
                    <div className="topic-tile-info">
                        <h3 className="topic-tile-title">{topicName}</h3>
                        <p className="topic-tile-labs">{noOfLabs} Resources</p>
                    </div>
                </div>
            </div>
        );
}