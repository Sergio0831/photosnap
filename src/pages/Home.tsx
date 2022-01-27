import React, { Suspense } from "react";
import GenericList from "../components/GenericList";
import Section from "../components/Section";
import Story from "../components/Story";
import { homeSections } from "../data/home-sections";
import { stories } from "../data/stories";
import Loading from "../components/Loading";
const Stories = React.lazy(() => import("../sections/Stories"));

const Home = () => {
  return (
    <>
      <GenericList
        items={homeSections}
        renderItem={(section) => (
          <Section key={section.alt} section={section} />
        )}
      />
      <Suspense fallback={<Loading />}>
        <Stories>
          {stories
            .map((story) => <Story key={story.id} story={story} />)
            .slice(0, 4)}
        </Stories>
      </Suspense>
    </>
  );
};

export default Home;
