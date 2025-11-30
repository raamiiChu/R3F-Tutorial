import { SiReact, SiThreedotjs } from "@icons-pack/react-simple-icons";
import { Plus } from "lucide-react";
import Link from "next/link";
import { H2, Highlight, P } from "@/components/typography";

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
        <Link href="https://r3f.docs.pmnd.rs/">
          <Highlight underline>React Three Fiber</Highlight> (R3F){" "}
        </Link>
        is a React renderer for{" "}
        <Link href="https://threejs.org/" target="_blank">
          <Highlight underline>Three.js</Highlight>
        </Link>
        , allowing you to build 3D scenes using React components. Instead of
        writing imperative Three.js code, you describe your scene with JSX,
        making it easier to manage state, props, and reactivity.
      </P>
    </article>
  );
};

export default WhatIsR3F;
