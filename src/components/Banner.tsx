import clsx from "clsx";
import { useRef, useState } from "react";
import useOnScreen from "../hooks/useOnScreen";
import ArrowLink from "./ArrowLink";
import classes from "./Banner.module.scss";
import LazyImage from "./LazyImage";

type BannerProps = {
  title: string;
  link: string;
  btnText: string;
  theme: string;
  desktopWebp: string;
  desktopAvif: string;
  tabletWebp: string;
  tabletAvif: string;
  mobileAvif: string;
  mobileWebp: string;
  alt: string;
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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(containerRef);

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
