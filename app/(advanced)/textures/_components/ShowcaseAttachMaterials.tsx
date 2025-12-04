"use client";

import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasWrapper from "@/components/canvas-wrapper";

const Scene = () => {
  const texturePlasma = useTexture("/textures/solar_plasma.jpg");
  const texturePanel = useTexture("/textures/carved_sun_panel.jpg");
  const textureCopper = useTexture("/textures/copper_patina.jpg");
  const textureGlass = useTexture("/textures/hazy_glass.jpg");
  const textureFlare = useTexture("/textures/lens_flare.jpg");
  const textureMarble = useTexture("/textures/colorful_marble_paper.jpg");

  return (
    <>
      <directionalLight position={[-2, 0, 2]} />
      <ambientLight intensity={0.75} />

      <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial attach="material-0" map={texturePlasma} />
        <meshStandardMaterial attach="material-1" map={texturePanel} />
        <meshStandardMaterial attach="material-2" map={textureCopper} />
        <meshStandardMaterial attach="material-3" map={textureGlass} />
        <meshStandardMaterial attach="material-4" map={textureFlare} />
        <meshStandardMaterial attach="material-5" map={textureMarble} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const ShowcaseLoadTextureWithDrei = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseLoadTextureWithDrei;
