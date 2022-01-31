import clsx from "clsx";
import { useEffect, useRef } from "react";
import classes from "./LazyImage.module.scss";

type LazyImageProps = {
  isVisible: boolean;
  isLoaded: boolean;
  setIsLoaded: (val: boolean) => void;
  onLoad?(): void;
  desktopAvif: string;
  tabletAvif?: string;
  mobileAvif: string;
  desktopWebp: string;
  tabletWebp?: string;
  mobileWebp: string;
  alt: string;
};

const LazyImage = ({
  isVisible,
  isLoaded,
  setIsLoaded,
  onLoad = () => {},
  desktopAvif,
  tabletAvif,
  mobileAvif,
  desktopWebp,
  tabletWebp,
  mobileWebp,
  alt
}: LazyImageProps) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imageClasses = clsx({
    [classes.img]: true,
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
    <picture>
      <source
        media='(min-width: 35em)'
        srcSet={`${desktopAvif}`}
        type='image/avif'
      />
      {tabletAvif && (
        <source
          media='(min-width: 35em)'
          srcSet={`${tabletAvif}`}
          type='image/avif'
        />
      )}
      <source
        media='(max-width: 559px)'
        srcSet={`${mobileAvif}`}
        type='image/avif'
      />
      <source
        media='(min-width: 35em)'
        srcSet={`${desktopWebp}`}
        type='image/webp'
      />
      {tabletWebp && (
        <source
          media='(min-width: 35em)'
          srcSet={`${tabletWebp}`}
          type='image/avif'
        />
      )}
      <source
        media='(max-width: 559px)'
        srcSet={`${mobileWebp}`}
        type='image/webp'
      />
      {(isVisible || isLoaded) && (
        <img
          loading='lazy'
          ref={imageRef}
          className={imageClasses}
          src={desktopWebp}
          alt={alt}
        />
      )}
    </picture>
  );
};

export default LazyImage;
