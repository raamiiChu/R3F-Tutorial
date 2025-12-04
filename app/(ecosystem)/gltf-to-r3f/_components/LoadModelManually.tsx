import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import { LinkPreview } from "@/components/ui/link-preview";
import ShowcaseLoadModelManually from "./ShowcaseLoadModelManually";

const codeLoadModelManually = `"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "/models/chevalier_sword/scene.gltf");
  // const gltf = useGLTF("/models/chevalier_sword/scene.gltf");

  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 0, 2]} intensity={20} />
      <directionalLight position={[0, 0, -2]} intensity={10} />

      <primitive
        object={gltf.scene}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2}
      />

      <OrbitControls enablePan={false} />
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

const LoadModelManually = () => {
  return (
    <div>
      <H2>Load Model Manually</H2>
      <P>
        We can load a model manually using the{" "}
        <InlineCode>useLoader</InlineCode> or <InlineCode>useGLTF</InlineCode>{" "}
        hook.
      </P>

      <ShowcaseLoadModelManually />
      <LinkPreview
        url="https://sketchfab.com/3d-models/chevalier-sword-b2662f2666a844e8a1bd0e7c4a7672d8"
        className="mx-auto mb-8 flex w-fit justify-center"
      >
        Reference
      </LinkPreview>

      <CodeBlock
        language="tsx"
        filename="load-model-manually.tsx"
        code={codeLoadModelManually}
        highlightLines={[3, 4, 5, 8, 9, 17, 18, 19, 20, 21, 22]}
      />
    </div>
  );
};

export default LoadModelManually;
