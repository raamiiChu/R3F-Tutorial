import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseLoadTexture from "./ShowcaseLoadTexture";

const codeLoadTexture = `"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Scene = () => {
  const textureStone = useLoader(TextureLoader, "/textures/stone_wall.jpg");

  return (
    <>
      <directionalLight position={[-2, 0, 2]} />
      <ambientLight intensity={0.75} />

      <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial map={textureStone} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
`;

const LoadTexture = () => {
  return (
    <div>
      <H2>Load Texture</H2>
      <P>
        We can load a texture manually using the{" "}
        <InlineCode>useLoader</InlineCode> hook in R3F or the{" "}
        <InlineCode>useTexture</InlineCode> hook in Drei.
      </P>

      <ShowcaseLoadTexture />

      <CodeBlock
        language="tsx"
        filename="load-texture.tsx"
        code={codeLoadTexture}
        highlightLines={[4, 8, 17]}
      />
    </div>
  );
};

export default LoadTexture;
