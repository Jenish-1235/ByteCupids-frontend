// src/components/LaunchLab/SpaceScene.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import FloatingModel from "./FloatingModel";
import PointerLockCameraRig from "./PointerLockCameraRig";

function ShootingStar() {
  const starRef = useRef<THREE.Mesh>(null);

  const initialPosition = useMemo(() => {
    return new THREE.Vector3(
      (Math.random() - 0.5) * 200,
      Math.random() * 100 + 50,
      -50
    );
  }, []);

  useFrame(() => {
    if (starRef.current) {
      starRef.current.position.x += 0.3;
      starRef.current.position.y -= 0.3;
      if (
        starRef.current.position.x > 100 ||
        starRef.current.position.y < -100
      ) {
        starRef.current.position.set(
          (Math.random() - 0.5) * 200,
          Math.random() * 100 + 50,
          -50
        );
      }
    }
  });

  return (
    <mesh ref={starRef} position={initialPosition}>
      <sphereGeometry args={[0.1, 12, 12]} />
      <meshStandardMaterial
        color="#ff69b4"
        emissive="#ff69b4"
        toneMapped={false}
      />
    </mesh>
  );
}

export default function SpaceScene({ onEnter }: { onEnter: () => void }) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
      }}
      camera={{ position: [0, 0, 7], fov: 75 }}
    >
      {/* 🌟 Global Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 20, 0]} intensity={0.3} />

      {/* Controls & Environment */}
      <PointerLockCameraRig onEnterPress={onEnter} />
      <Stars radius={200} depth={100} count={7000} factor={10} fade />

      {/* Shooting Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <ShootingStar key={i} />
      ))}

      {/* Floating Models */}
      {floatingModels.map(({ modelPath, scale, info, count }, i) =>
        Array.from({ length: count }).map((_, j) => (
          <FloatingModel
            key={`${i}-${j}`}
            modelPath={modelPath}
            scale={scale}
            info={info}
          />
        ))
      )}
    </Canvas>
  );
}

const floatingModels = [
  {
    modelPath: "../../store/models/react-logo/scene.gltf",
    scale: 1.5,
    info: "React",
    count: 3,
  },
  {
    modelPath: "../../store/models/c-sharp-logo/scene.gltf",
    scale: 0.1,
    info: "C#",
    count: 3,
  },
  {
    modelPath: "../../store/models/android-icon/scene.gltf",
    scale: 10,
    info: "Android Operating System",
    count: 2,
  },
  {
    modelPath: "../../store/models/android-logo/scene.gltf",
    scale: 0.05,
    info: "Android Logo",
    count: 2,
  },
  {
    modelPath: "../../store/models/arch-linux/scene.gltf",
    scale: 0.05,
    info: "Arch Linux",
    count: 3,
  },
  {
    modelPath: "../../store/models/c-logo/scene.gltf",
    scale: 0.05,
    info: "C++",
    count: 3,
  },
  {
    modelPath: "../../store/models/docker/scene.gltf",
    scale: 0.05,
    info: "Docker",
    count: 2,
  },
  {
    modelPath: "../../store/models/github-logo/scene.gltf",
    scale: 0.05,
    info: "Github",
    count: 2,
  },
  {
    modelPath: "../../store/models/java-logo/scene.gltf",
    scale: 0.05,
    info: "Java",
    count: 3,
  },
  {
    modelPath: "../../store/models/linux-tux/scene.gltf",
    scale: 0.05,
    info: "Linux#",
    count: 3,
  },
  {
    modelPath: "../../store/models/mechanical-keyboard/scene.gltf",
    scale: 0.08,
    info: "Keyboard",
    count: 2,
  },
  {
    modelPath: "../../store/models/my-computer/scene.gltf",
    scale: 0.05,
    info: "Modern Desktop Computer",
    count: 2,
  },
  {
    modelPath: "../../store/models/python-logo/scene.gltf",
    scale: 0.05,
    info: "Python",
    count: 3,
  },
  {
    modelPath: "../../store/models/raspberry-pi/scene.gltf",
    scale: 0.05,
    info: "Raspberry Pi",
    count: 3,
  },
  {
    modelPath: "../../store/models/rust-crab/scene.gltf",
    scale: 0.05,
    info: "Rust",
    count: 2,
  },
];
