"use client";

import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Color } from "three";
import CanvasWrapper from "@/components/canvas-wrapper";

const Scene = () => {
  const textureFlare = useTexture("/textures/lens_flare.jpg");
  const textureStarsAndCosmos = useTexture("/textures/stars_and_cosmos.jpg");

  const { scene } = useThree();
  scene.background = textureStarsAndCosmos;
  // scene.background = new Color("#38bdf8");

  return (
    <>
      <directionalLight position={[-2, 0, 2]} />
      <ambientLight intensity={0.75} />

      <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={textureFlare} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const ShowcaseChangeBackground = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseChangeBackground;
