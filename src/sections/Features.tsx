import clsx from "clsx";
import classes from "./Features.module.scss";

type FeaturesProps = {
  children: React.ReactNode;
  home?: boolean;
};

const Features = ({ children, home }: FeaturesProps) => {
  const featuresClasses = clsx({
    [classes.features]: true,
    "section-center": true,
    [classes.features__page]: !home
  });

  return <section className={featuresClasses}>{children}</section>;
};

export default Features;
