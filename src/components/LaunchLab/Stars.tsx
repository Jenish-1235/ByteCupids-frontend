import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Stars = () => {
  interface Star {
    x: number;
    y: number;
    size: number;
    duration: number;
  }

  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const numberOfStars = 300; // Number of stars to generate
    const starsArray = [];

    for (let i = 0; i < numberOfStars; i++) {
      starsArray.push({
        x: Math.random() * 100, // Random x position between 0 and 100
        y: Math.random() * 100, // Random y position between 0 and 100
        size: Math.random() * 2 + 5, // Random size between 1px and 3px
        duration: Math.random() * 3 + 3, // Random duration between 3s and 6s
      });
    }

    setStars(starsArray);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="star"
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: ["0px", "-50px", "0px"],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5, // Random delay for each star
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
