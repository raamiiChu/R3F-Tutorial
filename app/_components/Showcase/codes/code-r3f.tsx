const codeR3F = `"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

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

const App = () => {
  return (
    <div
      style={{
        height: "30dvh",
        maxWidth: "100%",
        width: "50dvw",
        margin: "0 auto",
        borderRadius: "10px",
        backgroundColor: "var(--muted)",
      }}
    >
      {/* scene */}
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        {/* lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* mouse controls */}
        <OrbitControls />

        <RotatingBox />
      </Canvas>
    </div>
  );
};

export default App;
`;

export default codeR3F;
