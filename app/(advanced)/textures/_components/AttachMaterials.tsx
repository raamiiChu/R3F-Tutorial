import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import ShowcaseAttachMaterials from "./ShowcaseAttachMaterials";

const codeAttachMaterials = `"use client";

import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default ShowcaseLoadTextureWithDrei;
`;

const AttachMaterials = () => {
  return (
    <div>
      <H2>Attach Materials</H2>
      <P>
        We can attach materials to a each face of a mesh using the{" "}
        <InlineCode>attach</InlineCode> prop. The format should be like{" "}
        <InlineCode>material-{"<index>"}</InlineCode>.
      </P>

      <ShowcaseAttachMaterials />

      <CodeBlock
        language="tsx"
        filename="load-texture-with-drei.tsx"
        code={codeAttachMaterials}
        highlightLines={[21, 22, 23, 24, 25, 26]}
      />
    </div>
  );
};

export default AttachMaterials;
