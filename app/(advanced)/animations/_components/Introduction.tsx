import { AlertCircleIcon } from "lucide-react";
import { H2, P } from "@/components/typography";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CodeBlock } from "@/components/ui/code-block";

const codeUseFrame = `"use client";

import { Canvas, useFrame } from '@react-three/fiber'  

const Box = () => {
  useFrame((state, delta, xrFrame) => {
    // state: 
    // Contains the current state of the scene.
    // Some common properties:
    // - clock.elapsedTime: the time since the start of the animation.
    // - clock.start() / clock.stop(): play / pause the clock.
    // - size: the size of the canvas.
    // - camera: the camera object.
    // - scene: the scene object.
    
    // delta: 
    // The time distance between the current and the last frame. 
    // It is useful for animations and physics calculations.
    
    // xrFrame: the frame from the WebXR session (only available in AR/VR/XR)
  })
};

const App = () => {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
};

export default App;
`;

const Introduction = () => {
  return (
    <article>
      <H2>useFrame</H2>
      <P>
        This hook allows you to execute code on every rendered frame, like
        running effects, updating controls, and so on.
      </P>

      <Alert variant="destructive">
        <AlertCircleIcon className="m-auto" />
        <AlertDescription>
          Hooks can only be used inside the Canvas element because they rely on
          context!
        </AlertDescription>
      </Alert>

      <CodeBlock language="tsx" filename="useFrame.tsx" code={codeUseFrame} />
    </article>
  );
};

export default Introduction;
