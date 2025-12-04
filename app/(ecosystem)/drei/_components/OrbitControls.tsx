import { H2 } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowCaseOrbitControls from "./ShowcaseOrbitControls";

const codeOrbitControls = `"use client";

import { OrbitControls, TorusKnot } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />

      {/* <TorusKnot args={[1, 0.1, 1000, 50]}>
          <meshStandardMaterial color={"green"} />
        </TorusKnot> */}
      
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.1, 1000, 50]} />
        <meshStandardMaterial color={"green"} />
      </mesh>

      <OrbitControls />
    </Canvas>
  );
};

export default App;
`;

const OrbitControls = () => {
  return (
    <article>
      <H2>Orbit Controls</H2>
      <ShowCaseOrbitControls />
      <CodeBlock
        language="tsx"
        filename="orbit-controls.tsx"
        code={codeOrbitControls}
        highlightLines={[3, 21]}
      />
    </article>
  );
};

export default OrbitControls;
