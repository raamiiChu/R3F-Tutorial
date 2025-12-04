import {
  SiAutodeskmaya,
  SiBlender,
  SiReact,
  SiThreedotjs,
  SiUnity,
} from "@icons-pack/react-simple-icons";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { H2, P } from "@/components/typography";
import { LinkPreview } from "@/components/ui/link-preview";
import ShowcaseOnlineTool from "./ShowcaseOnlineTool";

const OnlineTool = () => {
  return (
    <article>
      <H2>Online Tool</H2>
      <P>An online tool to convert GLTF files (.glb) to R3F components.</P>

      <section className="mx-auto my-16 flex flex-col items-center justify-around gap-8 xl:flex-row xl:gap-4">
        <section className="flex gap-4">
          <figure>
            <SiAutodeskmaya size={56} />
            <figcaption className="text-center">Maya</figcaption>
          </figure>
          <figure>
            <SiBlender size={56} />
            <figcaption className="text-center">Blender</figcaption>
          </figure>
          <figure>
            <SiUnity size={56} />
            <figcaption className="text-center">Unity</figcaption>
          </figure>
        </section>

        <figure>
          <ArrowDown size={56} className="mx-auto block xl:hidden" />
          <ArrowRight size={56} className="mx-auto hidden xl:block" />
          <LinkPreview
            url="https://gltf.pmnd.rs/"
            className="flex justify-center"
          >
            <figcaption>GLTF To R3F</figcaption>
          </LinkPreview>
        </figure>

        <figure className="flex flex-col items-center">
          <section className="flex items-center gap-4">
            <SiThreedotjs size={56} />
            <Plus size={20} />
            <SiReact size={56} />
          </section>
          <figcaption className="text-center">R3F</figcaption>
        </figure>
      </section>

      <ShowcaseOnlineTool />

      <LinkPreview
        url="https://sketchfab.com/3d-models/microphone-gxl-066-bafhcteks-5172dbe9281a45f48cee8c15bdfa1831?ref=gltf_page"
        className="mx-auto mb-8 flex w-fit justify-center"
      >
        Reference
      </LinkPreview>
    </article>
  );
};

export default OnlineTool;
