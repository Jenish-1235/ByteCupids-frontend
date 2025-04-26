import '../../styles/components/LabModulesStyles/ModuleTile.css';

export default function ModuleTile({ Module, image }: { Module: string , image: string }) {
    return (
        <div className="Module-tile" style={{ backgroundImage: `url(${image})` }}>
            <div className="Module-title">{Module}</div>
        </div>
    );
}