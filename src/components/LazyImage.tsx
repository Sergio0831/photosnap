import clsx from "clsx";
import { useCallback, useEffect, useRef } from "react";
import { LazyImageType } from "../types/LazyImage.types";
import classes from "./LazyImage.module.scss";

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
}: LazyImageType) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imageClasses = clsx({
    [classes.img]: true,
    [classes.imageLoaded]: isLoaded
  });

  const loadImage = useCallback(() => {
    if (!isVisible || isLoaded) {
      return;
    }
    if (imageRef.current) {
      imageRef.current.onload = () => {
        setIsLoaded(true);
        onLoad();
      };
    }
  }, [isVisible, onLoad, isLoaded, setIsLoaded]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

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
