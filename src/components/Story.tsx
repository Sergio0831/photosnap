import clsx from "clsx";
import useOnLoad from "../hooks/useOnLoad";
import { StoryTypes } from "../types/Story.types";
import ArrowLink from "./ArrowLink";
import Button from "./Button";
import LazyImage from "./LazyImage";
import classes from "./Story.module.scss";

type StoryProps = {
  story: StoryTypes;
  pathname?: string;
};

const Story = ({ story, pathname }: StoryProps) => {
  const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();

  const articleClasses = clsx({
    [classes.story]: true,
    container: true,
    containerLoaded: isLoaded
  });

  return (
    <article ref={containerRef} className={articleClasses}>
      <Button
        aria-label={story.title}
        link={`/stories/${story.id}`}
        className={classes.story__link}
      />
      <div className={classes.story__img}>
        <LazyImage
          isVisible={isVisible}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          desktopAvif={story.desktopAvif}
          mobileAvif={story.mobileAvif}
          desktopWebp={story.desktopWebp}
          mobileWebp={story.mobileWebp}
          alt={story.alt}
        />
      </div>
      <div className={classes.story__overlay}>
        <div className={classes.story__text}>
          {pathname !== "/" && <h5>{story.date}</h5>}
          <h5 className={classes.story__title}>{story.title}</h5>
          <h5>by {story.author}</h5>
          <div className={classes.story__line}></div>
          <ArrowLink
            link={`/stories/${story.id}`}
            btnText='read story'
            theme='dark'
          />
        </div>
      </div>
    </article>
  );
};

export default Story;
