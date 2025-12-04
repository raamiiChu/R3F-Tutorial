import { H1 } from "@/components/typography";
import { AttachMaterials, ChangeBackground, LoadTexture } from "./_components";

const Textures = () => {
  return (
    <>
      <H1>Textures</H1>
      <LoadTexture />
      <AttachMaterials />
      <ChangeBackground />
    </>
  );
};

export default Textures;
