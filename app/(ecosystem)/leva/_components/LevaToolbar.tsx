import { H2 } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseLevaToolbar from "./ShowcaseLevaToolbar";

const codeLevaToolbar = `"use client";

import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import { type DirectionalLight, DirectionalLightHelper } from "three";

const Scene = () => {
  const directionalLightRef = useRef<DirectionalLight>(null);

  useHelper(
    directionalLightRef as React.RefObject<DirectionalLight>,
    DirectionalLightHelper,
    1,
    "#d696d9",
  );

  const { lightColor, lightIntensity, lightPosition } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1,
    },
    lightPosition: [0, 0, 3],
  });

  const { boxColor, boxPosition, boxRotation } = useControls({
    boxColor: "#38bdf8",
    boxPosition: [0, 0, 0],
    boxRotation: [0, 0, 0],
  });

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={lightPosition}
        color={lightColor}
        intensity={lightIntensity}
      />
      <ambientLight intensity={0.5} />

      <mesh position={boxPosition} rotation={boxRotation}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={boxColor} />
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

const LevaToolbar = () => {
  return (
    <article>
      <H2>Leva Toolbar</H2>
      <ShowcaseLevaToolbar />
      <CodeBlock
        language="tsx"
        filename="leva-toolbar.tsx"
        code={codeLevaToolbar}
        highlightLines={[5, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 40, 41, 42]}
      />
    </article>
  );
};

export default LevaToolbar;
