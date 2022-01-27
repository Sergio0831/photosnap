import classes from "./Stories.module.scss";

type StoriesProps = {
  children: React.ReactNode;
};

const Stories = ({ children }: StoriesProps) => {
  return <section className={classes.stories}>{children}</section>;
};

export default Stories;
