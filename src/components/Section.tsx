import clsx from "clsx";
import useOnLoad from "../hooks/useOnLoad";
import { SectionTypes } from "../types/Section.types";
import ArrowLink from "./ArrowLink";
import LazyImage from "./LazyImage";
import classes from "./Section.module.scss";

const Section = ({
  heading,
  text,
  link,
  theme,
  btnText,
  desktopWebp,
  desktopAvif,
  tabletWebp,
  tabletAvif,
  mobileAvif,
  mobileWebp,
  alt,
  home
}: SectionTypes) => {
  const { isLoaded, isVisible, setIsLoaded, containerRef } = useOnLoad();

  const imageClasses = clsx({
    [classes.section__image]: true,
    container: true,
    containerLoaded: isLoaded
  });

  const sectionClasses = clsx({
    [classes.section]: true,
    [classes.section__dark]: theme === "dark",
    [classes.section__hero]: !home
  });

  return (
    <section className={sectionClasses}>
      <div className={classes.section__text}>
        <div className={classes.text__container}>
          <h2>{heading}</h2>
          <p>{text}</p>
          {home && (
            <ArrowLink
              link={link as string}
              theme={theme}
              btnText={btnText as string}
            />
          )}
        </div>
      </div>
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

export default Section;
