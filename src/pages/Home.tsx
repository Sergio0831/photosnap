import React from "react";
import GenericList from "../components/GenericList";
import Section from "../components/Section";
import Story from "../components/Story";
import { homeSections } from "../data/home-sections";
import { stories } from "../data/stories";
import { features } from "../data/features";
import Feature from "../components/Feature";
const Stories = React.lazy(() => import("../sections/Stories"));
const Features = React.lazy(() => import("../sections/Features"));

const Home = () => {
  return (
    <>
      <GenericList
        items={homeSections}
        renderItem={(section) => (
          <Section key={section.alt} section={section} />
        )}
      />
      <Stories>
        {stories
          .map((story) => <Story key={story.id} story={story} />)
          .slice(0, 4)}
      </Stories>
      <Features>
        {features
          .map((feature) => <Feature key={feature.id} feature={feature} />)
          .slice(0, 3)}
      </Features>
    </>
  );
};

export default Home;
