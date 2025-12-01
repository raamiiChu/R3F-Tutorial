import { H1 } from "@/components/typography";
import {
  CameraIntroduction,
  CoordinateSystem,
  LightsIntroduction,
  MeshIntroduction,
  SceneIntroduction,
  Showcase,
} from "./_components";

const Foundation = () => {
  return (
    <>
      <H1>Foundation</H1>
      <CoordinateSystem />
      <SceneIntroduction />
      <CameraIntroduction />
      <MeshIntroduction />
      <LightsIntroduction />
      <Showcase />
    </>
  );
};

export default Foundation;
