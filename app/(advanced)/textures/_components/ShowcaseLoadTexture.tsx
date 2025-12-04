"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import CanvasWrapper from "@/components/canvas-wrapper";

const Scene = () => {
  const textureStone = useLoader(TextureLoader, "/textures/stone_wall.jpg");

  return (
    <>
      <directionalLight position={[-2, 0, 2]} />
      <ambientLight intensity={0.75} />

      <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial map={textureStone} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const ShowcaseLoadTexture = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseLoadTexture;
