import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";

const codeScene = `
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
      <mesh>
        ...
      </mesh>
    </Canvas>
  );
};

export default App;
`;

const SceneIntroduction = () => {
  return (
    <article className="mb-4">
      <H2>Scene</H2>
      <P>
        A 3D place where you can place your objects including cameras, lights,
        meshes, and etc.
      </P>
      <P>
        Key elements include the <InlineCode>{"<Canvas>"}</InlineCode>{" "}
        component, which sets up the scene, camera, and render loop, and{" "}
        <InlineCode>{"<mesh>"}</InlineCode> components to represent 3D objects.
      </P>

      <CodeBlock language="tsx" filename="scene.tsx" code={codeScene} />
    </article>
  );
};

export default SceneIntroduction;
