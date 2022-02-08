import clsx from "clsx";
import { motion } from "framer-motion";
import useOnLoad from "../hooks/useOnLoad";
import useOnScroll from "../hooks/useOnScroll";
import { container, fadeInUp, fadeIn } from "../utils/animations";
import ArrowLink from "./ArrowLink";
import LazyImage from "./LazyImage";
import classes from "./StoriesHero.module.scss";

type StoriesHeroProps = {
  stories?: boolean;
};

const StoriesHero = ({ stories }: StoriesHeroProps) => {
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
        </div>
        {stories && (
          <motion.div
            className={classes.hero__text}
            variants={container}
            initial='hidden'
            animate='show'
          >
            <motion.h1 variants={fadeInUp}>
              last month's featured story
            </motion.h1>
            <motion.h2 variants={fadeInUp}>
              hazzy full moon of appalachia
            </motion.h2>
            <motion.h5 variants={fadeInUp}>
              <span>March 2nd 2020</span>
              by John Appleseed
            </motion.h5>
            <motion.p variants={fadeInUp}>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </motion.p>
            <motion.div variants={fadeIn}>
              <ArrowLink
                btnText='read the story'
                theme='dark'
                link='/stories/s1'
              />
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default StoriesHero;
