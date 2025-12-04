import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseChangeBackground from "./ShowcaseChangeBackground";

const codeChangeBackground = `"use client";

import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Color } from "three";

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
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default ShowcaseChangeBackground;
`;

const ChangeBackground = () => {
  return (
    <div>
      <H2>Change Background</H2>
      <P>
        We can change the background of a scene using the{" "}
        <InlineCode>useThree</InlineCode> prop.
      </P>

      <ShowcaseChangeBackground />

      <CodeBlock
        language="tsx"
        filename="change-background.tsx"
        code={codeChangeBackground}
        highlightLines={[4, 9, 12]}
      />
    </div>
  );
};

export default ChangeBackground;
