import clsx from "clsx";
import Icon from "./Icon";
import classes from "./Section.module.scss";

type SectionProps = {
  heading: string;
  text: string;
  theme: string;
  btnText: string;
  mobileWebp: string;
  tabletWebp: string;
  desktopWebp: string;
  mobileAvif: string;
  tabletAvif: string;
  desktopAvif: string;
  alt: string;
};

const Section = ({
  heading,
  text,
  theme,
  btnText,
  alt,
  mobileWebp,
  tabletWebp,
  desktopWebp,
  mobileAvif,
  tabletAvif,
  desktopAvif
}: SectionProps) => {
  const sectionClasses = clsx({
    [classes.section]: true,
    [classes.section__dark]: theme === "dark"
  });

  return (
    <section className={sectionClasses}>
      <div className={classes.section__text}>
        <div className={classes.text__container}>
          <h2>{heading}</h2>
          <p>{text}</p>
          <div className={classes.btn__container}>
            <button className={`btn-outline--${theme}`}>{btnText}</button>
            <Icon color={theme === "dark" ? "#fff" : "#000"} icon='arrow' />
          </div>
        </div>
      </div>
      <div className={classes.section__image}>
        <picture>
          <source
            media='(min-width: 48em)'
            srcSet={`${desktopAvif}`}
            type='image/avif'
          />
          <source
            media='(min-width: 35em)'
            srcSet={`${tabletAvif}`}
            type='image/avif'
          />
          <source srcSet={`${mobileAvif}`} type='image/avif' />
          <source
            media='(min-width: 48em)'
            srcSet={`${desktopWebp}`}
            type='image/webp'
          />
          <source
            media='(min-width: 35em)'
            srcSet={`${tabletWebp}`}
            type='image/webp'
          />
          <source srcSet={`${mobileWebp}`} type='image/webp' />
          <img src={desktopWebp} alt={alt} />
        </picture>
      </div>
    </section>
  );
};

export default Section;
