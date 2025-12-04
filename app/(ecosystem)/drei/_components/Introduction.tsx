import { H2, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import { LinkPreview } from "@/components/ui/link-preview";

const Introduction = () => {
  return (
    <article>
      <H2>Introduction</H2>

      <section className="mb-4">
        <LinkPreview url="https://drei.docs.pmnd.rs/">Drei</LinkPreview>
        <P className="inline">
          {" "}
          is an extremely rich package with a lot of helpers and abstractions
          for R3F.
        </P>
      </section>

      <CodeBlock
        language="bash"
        filename="install"
        code={"npm install @react-three/drei"}
      />
    </article>
  );
};

export default Introduction;
