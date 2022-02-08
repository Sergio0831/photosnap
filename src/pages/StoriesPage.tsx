import React from "react";
import GenericList from "../components/GenericList";
import Story from "../components/Story";
import { stories } from "../data/stories";
const StoriesHero = React.lazy(() => import("../components/StoriesHero"));
const Stories = React.lazy(() => import("../sections/Stories"));

const StoriesPage = () => {
  return (
    <>
      <StoriesHero stories />
      <Stories>
        <GenericList
          items={stories}
          renderItem={(story) => <Story key={story.id} story={story} />}
        />
      </Stories>
    </>
  );
};

export default StoriesPage;
