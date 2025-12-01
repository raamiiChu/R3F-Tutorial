"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import CanvasWrapper from "@/components/canvas-wrapper";

const RotatingBox = () => {
  const ref = useRef<THREE.Mesh>(null);

  // animation loop
  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });

  // models
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Preview = () => {
  return (
    <CanvasWrapper>
      {/* scene */}
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        {/* lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* mouse controls */}
        <OrbitControls />

        <RotatingBox />
      </Canvas>
    </CanvasWrapper>
  );
};

export default Preview;
