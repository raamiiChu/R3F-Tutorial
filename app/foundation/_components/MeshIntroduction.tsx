import { H2, Highlight, List, P } from "@/components/typography";

const MeshIntroduction = () => {
  return (
    <article>
      <H2>Mesh</H2>
      <P>
        In R3F, all objects are referred to as meshes which is composed of 2
        components:
      </P>
      <List>
        <li>Geometry: The shape of the mesh</li>
        <li>
          Material: The appearance of the mesh.{" "}
          <Highlight>Affected by the lights.</Highlight>
        </li>
      </List>
    </article>
  );
};

export default MeshIntroduction;
