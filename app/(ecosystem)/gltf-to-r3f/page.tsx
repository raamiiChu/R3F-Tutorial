import {
  SiAutodeskmaya,
  SiBlender,
  SiReact,
  SiThreedotjs,
  SiUnity,
} from "@icons-pack/react-simple-icons";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";
import { H1, P } from "@/components/typography";
import { LinkPreview } from "@/components/ui/link-preview";

const GltfToR3f = () => {
  return (
    <>
      <H1>GLTF To R3F</H1>
      <P>An online tool to convert GLTF files to R3F components.</P>

      <section className="mx-auto mt-16 flex flex-col items-center justify-around gap-8 xl:flex-row xl:gap-4">
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
    </>
  );
};

export default GltfToR3f;
