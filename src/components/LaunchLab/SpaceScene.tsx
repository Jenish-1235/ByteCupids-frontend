// src/components/LaunchLab/SpaceScene.tsx
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import FloatingFacts from "./FloatingFacts";

function AutoCameraRig() {
  const { camera } = useThree();
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;

    // Configurable amplitudes and speeds
    const yawAmplitude = 4; // side to side
    const pitchAmplitude = 1.5; // up and down
    const forwardDrift = 10; // distance from center
    const yawSpeed = 0.3;
    const pitchSpeed = 0.15;

    // Oscillate x and y position
    const x = yawAmplitude * Math.sin(time.current * yawSpeed);
    const y = pitchAmplitude * Math.sin(time.current * pitchSpeed);
    const z = forwardDrift;

    camera.position.set(x, y, z);

    // Camera looks gently around the center
    const lookX = 0.5 * Math.sin(time.current * yawSpeed * 0.8);
    const lookY = 0.2 * Math.sin(time.current * pitchSpeed * 1.2);
    const lookZ = 0;

    camera.lookAt(lookX, lookY, lookZ);
  });

  return null;
}

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

export default function SpaceScene() {
  return (
    <>
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
        {/* 🌌 Lighting & camera */}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <AutoCameraRig />

        {/* ⭐ Stars and shooting stars */}
        <Stars radius={200} depth={100} count={7000} factor={10} fade />
        {Array.from({ length: 15 }).map((_, i) => (
          <ShootingStar key={i} />
        ))}
      </Canvas>
      <FloatingFacts />
    </>
  );
}