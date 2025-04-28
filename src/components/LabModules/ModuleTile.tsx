
import '../../styles/components/LabModulesStyles/ModuleTile.css';
import { useNavigate } from 'react-router-dom';

export default function ModuleTile({ Module, image, moduleId }: { Module: string , image: string , moduleId: string }) {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(`Module clicked: ${moduleId}`);
        navigate(`/lab/${Module}/topics`, { replace: true, state: { moduleId, Module, image } });
    };
    return (
        <div className="Module-tile" style={{ backgroundImage: `url(${image})` }} onClick={handleClick}>
            <div className="Module-title">{Module}</div>
        </div>
    );
}