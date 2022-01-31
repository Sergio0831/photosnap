import ArrowLink from "./ArrowLink";
import classes from "./StoriesHero.module.scss";

const StoriesHero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.hero__image}>
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
              alt='Hero Image'
            />
          </picture>
        </div>
        <div className={classes.hero__text}>
          <h6>LAST MONTH’S FEATURED STORY</h6>
          <h2>HAZY FULL MOON OF APPALACHIA</h2>
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