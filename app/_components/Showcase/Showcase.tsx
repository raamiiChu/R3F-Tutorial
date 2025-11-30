import { H2 } from "@/components/typography";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { codeR3F, codeThreeJs } from "./codes";
import Preview from "./Preview";

// import PreviewPureThree from "./PreviewPureThree";

const Showcase = () => {
  return (
    <article>
      <H2>Showcase</H2>

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="three-js">Three.js</TabsTrigger>
          <TabsTrigger value="r3f">R3F</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Preview />
          {/* <PreviewPureThree /> */}
        </TabsContent>
        <TabsContent value="three-js">
          <CodeBlock
            language="typescript"
            filename="three-js.tsx"
            code={codeThreeJs}
          />
        </TabsContent>
        <TabsContent value="r3f">
          <CodeBlock language="tsx" filename="r3f.tsx" code={codeR3F} />
        </TabsContent>
      </Tabs>
    </article>
  );
};

export default Showcase;
