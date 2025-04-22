import '../../styles/components/LabTopicsStyles/TopicTile.css';

export default function TopicTile({ topic, image }: { topic: string , image: string }) {
    return (
        <div className="topic-tile" style={{ backgroundImage: `url(${image})` }}>
            <div className="topic-title">{topic}</div>
        </div>
    );
}