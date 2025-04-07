import { motion } from "framer-motion";
import { useMemo } from "react";
import "../../styles/components/LaunchLabStyles/FloatingFacts.css";

const facts = [
  "A process in Linux can have multiple threads.",
  "TCP guarantees reliable data transmission.",
  "Kernels use system calls to bridge user-space and hardware.",
  "CPU registers are the fastest storage in a computer.",
  "DNS translates domain names to IP addresses.",
  "Context switching is expensive in OS design.",
  "Inode in Linux represents metadata of files.",
  "Stacks grow downwards in memory in most systems.",
  "Interrupts are signals to grab CPU attention.",
  "JVM converts Java bytecode to machine code.",
  "Garbage collection reclaims unused memory in high-level languages.",
  "Distributed systems often face the CAP theorem trade-offs.",
];

const MAIN_BUBBLE_RADIUS = 220;

export default function FloatingFacts() {
  const screenWidth =
    typeof window !== "undefined" ? window.innerWidth : 1920;
  const screenHeight =
    typeof window !== "undefined" ? window.innerHeight : 1080;

  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  const isOverlappingMain = (x: number, y: number, size: number) => {
    const dx = x - centerX;
    const dy = y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < MAIN_BUBBLE_RADIUS + size / 2 + 20;
  };

  const isOverlappingOthers = (
    x: number,
    y: number,
    size: number,
    others: { x: number; y: number; size: number }[]
  ) => {
    return others.some((o) => {
      const dx = x - o.x;
      const dy = y - o.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < (size + o.size) / 2 + 20; // extra 20px padding
    });
  };

  const animatedFacts = useMemo(() => {
    const placedFacts = [];

    let attempts = 0;
    while (placedFacts.length < facts.length && attempts < 5000) {
      attempts++;

      const size = 150 + Math.random() * 30;
      const x = Math.random() * (screenWidth - size);
      const y = Math.random() * (screenHeight - size);

      if (
        !isOverlappingMain(x, y, size) &&
        !isOverlappingOthers(x, y, size, placedFacts)
      ) {
        const glowStrength = Math.floor(Math.random() * 8 + 8);
        placedFacts.push({
          text: facts[placedFacts.length],
          x,
          y,
          size,
          delay: Math.random() * 4,
          duration: Math.random() * 3 + 5,
          boxShadow: `0 0 ${glowStrength}px rgba(255, 150, 230, 0.5),
                      0 0 ${glowStrength + 8}px rgba(255, 170, 255, 0.4)`,
        });
      }
    }

    return placedFacts;
  }, [screenWidth, screenHeight]);

  return (
    <div className="floating-facts-container">
      {animatedFacts.map((fact, index) => (
        <motion.div
          key={index}
          className="floating-fact"
          title={fact.text}
          style={{
            left: `${fact.x}px`,
            top: `${fact.y}px`,
            width: `${fact.size}px`,
            height: `${fact.size}px`,
            boxShadow: fact.boxShadow,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0.8, 1, 0],
            y: ["0px", "-15px", "-25px", "-15px", "0px"],
            x: ["0px", "8px", "-8px", "8px", "0px"],
          }}
          transition={{
            duration: fact.duration,
            delay: fact.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {fact.text}
        </motion.div>
      ))}
    </div>
  );
}
