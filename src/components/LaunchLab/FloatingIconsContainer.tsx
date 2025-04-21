import { FloatingIcon } from "./FloatingIcon";
import { Suspense } from "react";

// Number of icons
const ICON_COUNT = 45;

// Generate a list of icon texture paths
const icons = Array.from({ length: ICON_COUNT }, (_, i) => ({
  texturePath: `/images/launchlab/anim/i${i + 1}.png`,
  shape: Math.random() > 0.5 ? ("sphere" as const) : ("cube" as const),
  position: [
    (Math.random() - 0.5) * 50,
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 50,
  ] as [number, number, number],
}));

export const FloatingIconsContainer = () => {
  return (
    <Suspense fallback={null}>
      {icons.map((icon, index) => (
        <FloatingIcon key={index} texturePath={icon.texturePath} size={5} />
      ))}
    </Suspense>
  );
};
