import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import { StoryTypes } from "../types/Story.types";
import ArrowLink from "./ArrowLink";
import Button from "./Button";
import classes from "./Story.module.scss";

type StoryProps = {
  story: StoryTypes;
  onLoad?(): void;
};

const Story = ({ story, onLoad = () => {} }: StoryProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

  const articleClasses = clsx({
    [classes.story]: true,
    container: true,
    containerLoaded: isLoaded
  });

  const imageClasses = clsx({
    [classes.imageLoaded]: isLoaded
  });

  useEffect(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isVisible, onLoad, isLoaded]);

  return (
    <article ref={containerRef} className={articleClasses}>
      <Button link={`/stories/${story.id}`} className={classes.story__link} />
      <div className={classes.story__img}>
        <picture>
          <source
            media='(min-width: 35em)'
            srcSet={`${story.desktopAvif}`}
            type='image/avif'
          />
          <source
            media='(max-width: 559px)'
            srcSet={`${story.mobileAvif}`}
            type='image/avif'
          />
          <source
            media='(min-width: 35em)'
            srcSet={`${story.desktopWebp}`}
            type='image/webp'
          />
          <source
            media='(max-width: 559px)'
            srcSet={`${story.mobileWebp}`}
            type='image/webp'
          />
          {(isVisible || isLoaded) && (
            <img
              ref={imageRef}
              className={imageClasses}
              src={story.desktopWebp}
              alt={story.alt}
            />
          )}
        </picture>
      </div>
      <div className={classes.story__overlay}>
        <div className={classes.story__text}>
          <h4>{story.title}</h4>
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
