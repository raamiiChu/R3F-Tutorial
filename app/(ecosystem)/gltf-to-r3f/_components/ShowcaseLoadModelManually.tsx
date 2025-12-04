"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import CanvasWrapper from "@/components/canvas-wrapper";

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

const ShowcaseLoadModelManually = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <Scene />
      </Canvas>
    </CanvasWrapper>
  );
};

export default ShowcaseLoadModelManually;
