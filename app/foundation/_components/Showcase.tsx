import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { H2, InlineCode } from "@/components/typography";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeBlock } from "@/components/ui/code-block";
import ShowPreview from "./ShowPreview";

const codeShowcase = `import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[-2, 0, 2]} />
      <ambientLight intensity={0.75} />

      <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default App;
`;

const Showcase = () => {
  return (
    <article>
      <H2>Showcase</H2>

      <Alert variant="destructive">
        <AlertCircleIcon className="m-auto" />
        <AlertDescription>
          Note that we don't need to import anything, All three.js objects will
          be treated as native JSX elements, just like you can just write{" "}
          {"<div />"} or {"<span />"} in regular ReactDOM. The general rule is
          that Fiber components are available under the camel-case version of
          their name in three.js.
        </AlertDescription>
      </Alert>

      <CodeBlock language="tsx" filename="showcase.tsx" code={codeShowcase} />
      <ShowPreview />
    </article>
  );
};

export default Showcase;
