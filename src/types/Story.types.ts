import { ImageType } from "./LazyImage.types";

export type StoryTypes = {
  id: string;
  date: string;
  title: string;
  author: string;
} & ImageType;
