import Image from "next/image";
import {
  H2,
  H4,
  Highlight,
  InlineCode,
  List,
  P,
} from "@/components/typography";

function CoordinateSystem() {
  return (
    <article>
      <H2>Coordinate System</H2>
      <P>
        3-axis coordinate system are represented as{" "}
        <InlineCode>[x, y, z]</InlineCode> arrays to define an object's
        position, orientation, transformation, etc. in a 3D space.
      </P>

      <H4>
        The coordinate system is <Highlight>right-handed</Highlight>:
      </H4>
      <List>
        <li>x: horizontal position (positive is right)</li>
        <li>y: vertical position (positive is up)</li>
        <li>z: depth (positive is out towards the viewer)</li>
      </List>

      <figure className="relative mx-auto aspect-video w-full bg-white sm:w-2/3">
        <Image
          src="/foundation/Right-and-Left-Handed-Coordinate-systems.png"
          alt="Right and Left Handed Coordinate systems"
          fill
          className="object-contain p-2"
        />
      </figure>
    </article>
  );
}

export default CoordinateSystem;
