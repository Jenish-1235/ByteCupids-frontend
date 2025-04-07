import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 5;
  will-change: transform;
`;

const GlowImg = styled.img`
  width: 48px;
  height: 48px;
  filter: drop-shadow(0 0 8px #ffc8fc) drop-shadow(0 0 4px #ffffffaa);
  opacity: 0.9;
  transition: transform 0.3s ease;
`;

interface FloatingIconDOMProps {
  texturePath: string;
}

export const FloatingIconDOM = ({ texturePath }: FloatingIconDOMProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lifecycleOffset] = useState(Math.random() * 5);

  useEffect(() => {
    const randomPosition = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      setPosition({ x, y });
    };

    randomPosition();
  }, []);

  return (
    <Container
      style={{ top: position.y, left: position.x }}
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: lifecycleOffset,
      }}
    >
      <GlowImg src={texturePath} alt="Floating Icon" />
    </Container>
  );
};
