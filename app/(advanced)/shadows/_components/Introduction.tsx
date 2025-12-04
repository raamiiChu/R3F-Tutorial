import { H2, InlineCode, P } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";

const codeShadows = `<Canvas shadows>
  <directionalLight castShadow/>

  <mesh castShadow>
    ...
  </mesh>

  <mesh receiveShadow>
    ...
  </mesh>
</Canvas>
`;

const Introduction = () => {
  return (
    <article>
      <H2>Shadows Prop</H2>
      <P>
        In order to enable shadows, you need to add the{" "}
        <InlineCode>shadows</InlineCode> prop to the{" "}
        <InlineCode>{"<Canvas />"}</InlineCode> component.
      </P>
      <P>
        After that, we need to specify which objects will cast shadows and which
        objects will receive shadows.
      </P>

      <CodeBlock
        language="tsx"
        filename="shadows.tsx"
        code={codeShadows}
        highlightLines={[2, 4, 8]}
      />
    </article>
  );
};

export default Introduction;
