import clsx from "clsx";
import useOnLoad from "../hooks/useOnLoad";
import ArrowLink from "./ArrowLink";
import LazyImage from "./LazyImage";
import classes from "./StoriesHero.module.scss";

const StoriesHero = () => {
  const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();

  const imageClasses = clsx({
    [classes.hero__image]: true,
    container: true,
    containerLoaded: isLoaded
  });

  return (
    <>
      <section className={classes.hero}>
        <div className={imageClasses} ref={containerRef}>
          <LazyImage
            isVisible={isVisible}
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            desktopWebp='../assets/stories/desktop/moon-of-appalacia.webp'
            tabletWebp='../assets/stories/tablet/moon-of-appalacia.webp'
            mobileWebp='../assets/stories/tablet/moon-of-appalacia.webp'
            desktopAvif='../assets/stories/desktop/moon-of-appalacia.avif'
            tabletAvif='../assets/stories/tablet/moon-of-appalacia.avif'
            mobileAvif='../assets/stories/mobile/moon-of-appalacia.avif'
            alt='Moon'
          />
          <picture>
            <source
              media='(min-width: 48em)'
              srcSet='../assets/stories/desktop/moon-of-appalacia.avif'
              type='image/avif'
            />
            <source
              media='(min-width: 35em)'
              srcSet='../assets/stories/tablet/moon-of-appalacia.avif'
              type='image/avif'
            />
            <source
              srcSet='../assets/stories/mobile/moon-of-appalacia.avif'
              type='image/avif'
            />
            <source
              media='(min-width: 48em)'
              srcSet='../assets/stories/desktop/moon-of-appalacia.webp'
              type='image/webp'
            />
            <source
              media='(min-width: 35em)'
              srcSet='../assets/stories/tablet/moon-of-appalacia.webp'
              type='image/webp'
            />
            <source
              srcSet='../assets/stories/mobile/moon-of-appalacia.webp'
              type='image/webp'
            />
            <img
              loading='lazy'
              src='../assets/stories/desktop/moon-of-appalacia.webp'
              alt='Stories Hero'
            />
          </picture>
        </div>
        <div className={classes.hero__text}>
          <h6>last month's featured story</h6>
          <h2>hazzy full moon of appalachia</h2>
          <h5>
            <span>March 2nd 2020</span>
            by John Appleseed
          </h5>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <ArrowLink btnText='read the story' theme='dark' link='/stories/s1' />
        </div>
      </section>
    </>
  );
};

export default StoriesHero;
