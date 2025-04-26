import '../../styles/components/LabModulesStyles/ModuleTile.css';

export default function ModuleTile({ Module, image, moduleId }: { Module: string , image: string , moduleId: string }) {

    const handleClick = () => {
        console.log(`Module clicked: ${moduleId}`);
        // Add your navigation logic here
    };
    return (
        <div className="Module-tile" style={{ backgroundImage: `url(${image})` }} onClick={handleClick}>
            <div className="Module-title">{Module}</div>
        </div>
    );
}