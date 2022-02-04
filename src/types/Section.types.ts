import { ImageType } from "./LazyImage.types";
import { Link } from "./Link.types";

export type SectionTypes = {
  home?: boolean;
  heading: string;
  text: string;
} & ImageType &
  Link;
