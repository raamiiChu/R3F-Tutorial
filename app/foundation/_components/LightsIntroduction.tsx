import Image from "next/image";
import { H2, InlineCode, List, P } from "@/components/typography";

const LightsIntroduction = () => {
  return (
    <article>
      <H2>Lights</H2>
      <P>Lights are used to illuminate the objects in the scene.</P>
      <List>
        <li>
          <InlineCode>ambientLight</InlineCode>:
          <P>
            It represents a soft illumination that evenly lights all objects.
          </P>
          <P>Common use cases: fill light.</P>
        </li>
        <li>
          <InlineCode>directionalLight</InlineCode>:
          <P>It emits light in a specific direction with parallel rays.</P>
          <P>Common use cases: key light, back light, sunlight.</P>
        </li>
        <li>
          <InlineCode>pointLight</InlineCode>:
          <P>
            A light that illuminates objects in all directions from a point.
          </P>
          <P>
            Common use cases: Light-emitting objects, e.g. torches, candles.
          </P>
        </li>
        <li>
          <InlineCode>spotLight</InlineCode>:
          <P>A light that shines in a cone-shaped area.</P>
          <P>Common use cases: key light, flashlight, stage light.</P>
        </li>
      </List>

      <figure className="relative mx-auto mb-4 aspect-video w-full bg-white sm:w-2/3">
        <Image
          src="/foundation/3-Points-Lighting.webp"
          alt="3 Points Lighting"
          fill
          className="object-contain p-2"
        />
      </figure>
    </article>
  );
};

export default LightsIntroduction;
