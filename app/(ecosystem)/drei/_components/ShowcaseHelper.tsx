"use client";

import { OrbitControls, TorusKnot, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { type DirectionalLight, DirectionalLightHelper } from "three";
import CanvasWrapper from "@/components/canvas-wrapper";

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

const ShowcaseHelper = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseHelper;
