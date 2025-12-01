"use client";

import { Canvas } from "@react-three/fiber";
import CanvasWrapper from "@/components/canvas-wrapper";

const ShowPreview = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <directionalLight position={[-2, 0, 2]} />
        <ambientLight intensity={0.75} />

        <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowPreview;
