import { H2, List } from "@/components/typography";

const KeyFeatures = () => {
  return (
    <article>
      <H2>Key Features</H2>
      <List>
        <li>It brings Three.js into the React ecosystem.</li>
        <li>
          You can build 3D objects, lights, cameras, and animations using
          declarative JSX.
        </li>
        <li>It integrates naturally with React hooks and state management.</li>
        <li>It reduces boilerplate and simplifies complex Three.js setups.</li>
      </List>
    </article>
  );
};

export default KeyFeatures;
