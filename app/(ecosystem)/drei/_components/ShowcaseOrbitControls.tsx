"use client";

import { OrbitControls, TorusKnot } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasWrapper from "@/components/canvas-wrapper";

const CameraShowCase = () => {
  return (
    <CanvasWrapper>
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
    </CanvasWrapper>
  );
};

export default CameraShowCase;
