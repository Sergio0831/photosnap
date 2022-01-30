import GenericList from "../components/GenericList";
import StoriesHero from "../components/StoriesHero";
import Stories from "../sections/Stories";
import Story from "../components/Story";
import { stories } from "../data/stories";

const StoriesPage = () => {
  return (
    <>
      <StoriesHero />
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
