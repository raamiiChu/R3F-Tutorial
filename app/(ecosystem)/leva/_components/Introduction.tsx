import { H2, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import { LinkPreview } from "@/components/ui/link-preview";

const Introduction = () => {
  return (
    <article>
      <H2>Introduction</H2>
      <P>
        Manually changing values to test settings is kinda annoying and time
        consuming.
      </P>

      <section className="mb-4">
        <P className="inline">We can use </P>
        <LinkPreview url="https://github.com/pmndrs/leva">Leva</LinkPreview>
        <P className="inline">
          {" "}
          to create a GUI toolbar to control the values in real time.
        </P>
      </section>

      <CodeBlock language="bash" filename="install" code={"npm i leva"} />
    </article>
  );
};

export default Introduction;
