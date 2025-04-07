import { motion } from "framer-motion";
import "../../styles/components/LaunchLabStyles/MainBubble.css";

export default function MainBubble({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`main-bubble ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
