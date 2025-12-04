"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type * as THREE from "three";
import CanvasWrapper from "@/components/canvas-wrapper";

const Scene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta;
      sphereRef.current.rotation.y += delta * 2;
      sphereRef.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    }

    if (isClicked) {
      state.clock.start();
    } else {
      state.clock.stop();
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 2]} />

      <mesh
        ref={sphereRef}
        position={[0, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked(!isClicked);
        }}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setIsHovered(true);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setIsHovered(false);
        }}
      >
        <sphereGeometry args={[10, 20, 20]} />
        <meshStandardMaterial color="#38bdf8" wireframe={isHovered} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const ShowcaseAnimationWithInteraction = () => {
  return (
    <CanvasWrapper>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseAnimationWithInteraction;
