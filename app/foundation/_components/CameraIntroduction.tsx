import Image from "next/image";
import { H2, InlineCode, List, Muted, P } from "@/components/typography";

const CameraIntroduction = () => {
  return (
    <article>
      <H2>Camera</H2>

      <P>
        default: PerspectiveCamera
        <InlineCode>
          {"{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }"}
        </InlineCode>
      </P>
      <P>
        The camera determines the visibility of the scene. There are two main
        types:
      </P>
      <List>
        <li>
          <InlineCode>PerspectiveCamera</InlineCode>
          <P>
            It mimics the way the human eye sees. Most commonly used in{" "}
            <b>3D</b> scenes.
          </P>
        </li>
        <li>
          <InlineCode>OrthographicCamera</InlineCode>
          <P>
            The size of objects stays constant regardless of its distance from
            the camera. Most commonly used in <b>2D</b> scenes.
          </P>
        </li>
      </List>

      <figure className="relative mx-auto my-4 aspect-video w-full bg-white sm:w-2/3">
        <Image
          src="/foundation/Perspective-and-Orthographic-Cameras.png"
          alt="Perspective and Orthographic Cameras"
          fill
          className="object-contain px-4"
        />
      </figure>
    </article>
  );
};

export default CameraIntroduction;
