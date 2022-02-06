import clsx from "clsx";
import useOnLoad from "../hooks/useOnLoad";
import { ImageType } from "../types/LazyImage.types";
import { Link } from "../types/Link.types";
import ArrowLink from "./ArrowLink";
import LazyImage from "./LazyImage";
import classes from "./Banner.module.scss";

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

  const imageClasses = clsx({
    [classes.banner__image]: true,
    container: true,
    containerLoaded: isLoaded
  });

  return (
    <section className={classes.banner}>
      <div className={`${classes.banner__content} section-center`}>
        <h2>{title}</h2>
        <ArrowLink link={link} btnText={btnText} theme={theme} />
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

export default Banner;
