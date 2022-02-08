import clsx from "clsx";
import useOnLoad from "../hooks/useOnLoad";
import useOnScroll from "../hooks/useOnScroll";
import { ImageType } from "../types/LazyImage.types";
import { Link } from "../types/Link.types";
import ArrowLink from "./ArrowLink";
import LazyImage from "./LazyImage";
import classes from "./Banner.module.scss";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/animations";

type BannerProps = Link &
  ImageType & {
    title: string;
  };

const Banner = ({
  title,
  btnText,
  link,
  theme,
  desktopWebp,
  desktopAvif,
  tabletWebp,
  tabletAvif,
  mobileAvif,
  mobileWebp,
  alt
}: BannerProps) => {
  const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();
  const { controls, element } = useOnScroll();

  const imageClasses = clsx({
    [classes.banner__image]: true,
    container: true,
    containerLoaded: isLoaded
  });

  return (
    <section className={classes.banner}>
      <motion.div
        animate={controls}
        ref={element}
        className={`${classes.banner__content} section-center`}
      >
        <motion.h2 variants={fadeInLeft}>{title}</motion.h2>
        <motion.div variants={fadeInRight}>
          <ArrowLink link={link} btnText={btnText} theme={theme} />
        </motion.div>
      </motion.div>
      <div className={imageClasses} ref={containerRef}>
        <LazyImage
          isVisible={isVisible}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          desktopWebp={desktopWebp}
          desktopAvif={desktopAvif}
          tabletWebp={tabletWebp}
          tabletAvif={tabletAvif}
          mobileAvif={mobileAvif}
          mobileWebp={mobileWebp}
          alt={alt}
        />
      </div>
    </section>
  );
};

export default Banner;
