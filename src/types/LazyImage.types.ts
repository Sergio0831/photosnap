export type LazyImageType = {
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
