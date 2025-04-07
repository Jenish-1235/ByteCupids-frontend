import { useTexture } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3, MeshBasicMaterial } from "three";
import { LinearFilter } from "three";

interface FloatingIconProps {
  texturePath: string;
  size?: number;
}

export const FloatingIcon = ({ texturePath, size = 4 }: FloatingIconProps) => {
  const texture = useTexture(texturePath);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.anisotropy = 10;

  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshBasicMaterial>(null);

  const [lifecycleOffset] = useState(() => Math.random() * 10); // random start time

  // Random spawn position in space
  const initialPosition = useMemo(() => {
    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;
    return new Vector3(rand(-80, 80), rand(-40, 40), rand(-80, 80));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + lifecycleOffset;
    const cycle = t % 10; // 10-second loop per icon

    let opacity = 0;

    if (cycle < 2) {
      // fade in
      opacity = cycle / 2;
    } else if (cycle < 7) {
      // hold
      opacity = 1;
    } else if (cycle < 9) {
      // fade out
      opacity = 1 - (cycle - 7) / 2;
    } else {
      opacity = 0;
    }

    if (materialRef.current) {
      materialRef.current.opacity = opacity;
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial
        ref={materialRef}
        map={texture}
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
};
