import clsx from "clsx";
import { SectionTypes } from "../types/Section.types";
import ArrowLink from "./ArrowLink";
import classes from "./Section.module.scss";

type SectionProps = {
  section: SectionTypes;
};

const Section = ({ section }: SectionProps) => {
  const sectionClasses = clsx({
    [classes.section]: true,
    [classes.section__dark]: section.theme === "dark"
  });

  return (
    <section className={sectionClasses}>
      <div className={classes.section__text}>
        <div className={classes.text__container}>
          <h2>{section.heading}</h2>
          <p>{section.text}</p>
          <ArrowLink
            link={section.link}
            theme={section.theme}
            btnText={section.btnText}
          />
        </div>
      </div>
      <div className={classes.section__image}>
        <picture>
          <source
            media='(min-width: 48em)'
            srcSet={`${section.desktopAvif}`}
            type='image/avif'
          />
          <source
            media='(min-width: 35em)'
            srcSet={`${section.tabletAvif}`}
            type='image/avif'
          />
          <source srcSet={`${section.mobileAvif}`} type='image/avif' />
          <source
            media='(min-width: 48em)'
            srcSet={`${section.desktopWebp}`}
            type='image/webp'
          />
          <source
            media='(min-width: 35em)'
            srcSet={`${section.tabletWebp}`}
            type='image/webp'
          />
          <source srcSet={`${section.mobileWebp}`} type='image/webp' />
          <img loading='lazy' src={section.desktopWebp} alt={section.alt} />
        </picture>
      </div>
    </section>
  );
};

export default Section;
