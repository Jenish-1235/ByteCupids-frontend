// src/components/LaunchLab/PointerLockCameraRig.tsx
import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PointerLockCameraRig({
  onEnterPress,
}: {
  onEnterPress: () => void;
}) {
  const { camera, gl } = useThree();
  const rotation = useRef({ x: 0, y: 0 });
  const movement = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    boost: false,
  });
  const zoom = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMouseClick = () => {
      if (document.pointerLockElement !== canvas) {
        canvas.requestPointerLock();
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement === canvas) {
        rotation.current.y -= event.movementX * 0.002;
        rotation.current.x -= event.movementY * 0.002;
        rotation.current.x = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, rotation.current.x)
        );
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          movement.current.forward = true;
          break;
        case "KeyS":
        case "ArrowDown":
          movement.current.backward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          movement.current.left = true;
          break;
        case "KeyD":
        case "ArrowRight":
          movement.current.right = true;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          movement.current.boost = true;
          break;
        case "Space":
          event.preventDefault();
          onEnterPress();
          break;
      }
    };
    
    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          movement.current.forward = false;
          break;
        case "KeyS":
        case "ArrowDown":
          movement.current.backward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          movement.current.left = false;
          break;
        case "KeyD":
        case "ArrowRight":
          movement.current.right = false;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          movement.current.boost = false;
          break;
      }
    };
    
    const handleWheel = (e: WheelEvent) => {
      zoom.current += e.deltaY * 0.01;
      zoom.current = Math.max(-5, Math.min(zoom.current, 5));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("wheel", handleWheel);
    canvas.addEventListener("click", handleMouseClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("click", handleMouseClick);
    };
  }, [gl, onEnterPress]);

  useFrame((_, delta) => {
    camera.rotation.x = rotation.current.x;
    camera.rotation.y = rotation.current.y;
    const baseSpeed = 5;
    const boostMultiplier = 3;
    const speed =
      baseSpeed * (movement.current.boost ? boostMultiplier : 1) * delta;
    const direction = new THREE.Vector3();

    if (movement.current.forward) direction.z -= speed;
    if (movement.current.backward) direction.z += speed;
    if (movement.current.left) direction.x -= speed;
    if (movement.current.right) direction.x += speed;

    direction.applyEuler(camera.rotation);
    camera.position.add(direction);

    // Apply zoom
    camera.position.z += zoom.current;
    zoom.current = 0;
  });

  return null;
}
