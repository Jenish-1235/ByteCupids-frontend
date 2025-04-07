// src/components/LaunchLab/FloatingModel.tsx
import { useGLTF, Html } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingModelProps {
  modelPath: string;
  scale?: number;
  info?: string;
}

export default function FloatingModel({ modelPath, scale = 1, info }: FloatingModelProps) {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Better distribution: Limit within a 40x30x40 space and avoid overlap extremes
  const initialPosition = useMemo(() => {
    const x = (Math.random() - 0.5) * 40;
    const y = (Math.random() - 0.5) * 30;
    const z = (Math.random() - 0.5) * 40;
    return new THREE.Vector3(x, y, z);
  }, []);

  useEffect(() => {
    if (scene) {
      // Fix upside-down issue
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.rotation.set(0, 0, 0);
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
      modelRef.current.rotation.x += 0.002;

      const floatOffset = Math.sin(Date.now() * 0.001) * 0.2;
      modelRef.current.position.y = initialPosition.y + floatOffset;

      if (hovered) {
        modelRef.current.position.x += (Math.random() - 0.5) * 0.1;
        modelRef.current.position.z += (Math.random() - 0.5) * 0.1;
      }
    }
  });

  return (
    <group
      ref={modelRef}
      position={initialPosition}
      scale={[scale, scale, scale]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Lighting attached to the model */}
      <ambientLight intensity={0.7} />
      <pointLight intensity={1.2} distance={5} position={[0, 2, 2]} />

      <primitive object={scene} />
      {hovered && info && (
        <Html center>
          <div style={{
            background: "rgba(255, 255, 255, 0.95)",
            color: "#000",
            padding: "5px 10px",
            fontSize: "0.75rem",
            borderRadius: "5px",
          }}>
            {info}
          </div>
        </Html>
      )}
    </group>
  );
}
