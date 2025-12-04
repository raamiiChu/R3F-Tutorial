"use client";

import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
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

  const { lightColor, lightIntensity, lightPosition } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.1,
    },
    lightPosition: [0, 0, 3],
  });

  const { boxColor, boxPosition, boxRotation } = useControls({
    boxColor: "#38bdf8",
    boxPosition: [0, 0, 0],
    boxRotation: [0, 0, 0],
  });

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={lightPosition}
        color={lightColor}
        intensity={lightIntensity}
      />
      <ambientLight intensity={0.5} />

      <mesh position={boxPosition} rotation={boxRotation}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={boxColor} />
      </mesh>

      <OrbitControls />
    </>
  );
};

const ShowcaseLevaToolbar = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseLevaToolbar;
