import { H2 } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseShadows from "./ShowcaseShadows";

const codeShowcaseShadows = `"use client";

import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { type SpotLight, SpotLightHelper } from "three";

const Scene = () => {
  const spotLightRef = useRef<SpotLight>(null);

  useHelper(spotLightRef as React.RefObject<SpotLight>, SpotLightHelper);

  return (
    <>
      <spotLight
        ref={spotLightRef}
        castShadow
        position={[0, 10, 10]}
        intensity={200}
        angle={0.5}
        penumbra={0.5}
        target-position={[0, 0, 0]}
      />
      <ambientLight intensity={0.3} />

      <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>

      <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f3f3f3" />
      </mesh>

      <OrbitControls />
    </>
  );
};

const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [10, 0, 0] }}>
      <Scene />
    </Canvas>
  );
};

export default App;
`;

const Showcase = () => {
  return (
    <article>
      <H2>Showcase</H2>
      <ShowcaseShadows />
      <CodeBlock
        language="tsx"
        filename="shadows.tsx"
        code={codeShowcaseShadows}
        highlightLines={[17, 26, 31, 43]}
      />
    </article>
  );
};

export default Showcase;
