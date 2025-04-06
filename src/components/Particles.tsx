import { motion } from "framer-motion";
import {useMemo} from "react";

export default function Particles() {
    const particles = useMemo(() => {
        return [...Array(300)].map(() => ({
            x: Math.random() * 100, // Random X position (0 to 100%)
            y: Math.random() * 100, // Random Y position (0 to 100%)
            size: Math.random() * 8 + 3, // Random size (3px to 11px)
            duration: Math.random() * 3 + 3, // Random animation duration
            delay: Math.random() * 5, // Random delay
        }));
    }, []);

    return (
        <div className="particles-container">
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: ["0px", "-50px", "0px"],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
}
