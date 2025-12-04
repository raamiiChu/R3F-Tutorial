import { SiReact, SiThreedotjs } from "@icons-pack/react-simple-icons";
import { Plus } from "lucide-react";
import { H2, P } from "@/components/typography";
import { LinkPreview } from "@/components/ui/link-preview";

const WhatIsR3F = () => {
  return (
    <article>
      <H2>What is R3F?</H2>
      <figure className="mb-2 flex items-center gap-2">
        <SiThreedotjs size={56} />
        <Plus size={20} />
        <SiReact size={56} />
      </figure>
      <P>
        <LinkPreview url="https://r3f.docs.pmnd.rs/">
          React Three Fiber (R3F)
        </LinkPreview>{" "}
        is a React renderer for{" "}
        <LinkPreview url="https://threejs.org/">Three.js</LinkPreview>, allowing
        you to build 3D scenes using React components. Instead of writing
        imperative Three.js code, you describe your scene with JSX, making it
        easier to manage state, props, and reactivity.
      </P>
    </article>
  );
};

export default WhatIsR3F;
