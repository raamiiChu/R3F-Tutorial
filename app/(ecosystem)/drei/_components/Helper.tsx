import { AlertCircleIcon } from "lucide-react";
import { H2, P } from "@/components/typography";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseHelper from "./ShowcaseHelper";

const codeHelper = `"use client";

import { OrbitControls, TorusKnot, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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

  return (
    <>
      {/* <gridHelper args={[20, 20]} /> */}
      {/* <axesHelper args={[5]} /> */}

      <directionalLight position={[0, 0, 2]} ref={directionalLightRef} />
      <ambientLight intensity={0.5} />

      <TorusKnot position={[0, 0, 0]} args={[1, 0.1, 1000, 50]}>
        <meshStandardMaterial color={"green"} />
        {/* <axesHelper args={[5]} /> */}
      </TorusKnot>

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

const Helper = () => {
  return (
    <article>
      <H2>Helper</H2>
      <P>
        Helpers are utility objects that assist you in visualizing or debugging
        (e.g. grids, axes, viewports, etc.). The following showcase shows where
        the directional light came.
      </P>
      <ShowcaseHelper />

      <Alert variant="destructive">
        <AlertCircleIcon className="m-auto" />
        <AlertDescription>
          Hooks can only be used within the Canvas component!
        </AlertDescription>
      </Alert>
      <CodeBlock
        language="tsx"
        filename="helper.tsx"
        code={codeHelper}
        highlightLines={[3, 6, 9, 11, 12, 13, 14, 15, 16, 23]}
      />
    </article>
  );
};

export default Helper;
