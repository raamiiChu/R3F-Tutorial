import { H1 } from "@/components/typography";
import {
  CameraIntroduction,
  CoordinateSystem,
  SceneIntroduction,
} from "./_components";

const Foundation = () => {
  return (
    <>
      <H1>Foundation</H1>
      <CoordinateSystem />
      <SceneIntroduction />
      <CameraIntroduction />
    </>
  );
};

export default Foundation;
