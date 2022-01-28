import classes from "./Features.module.scss";

type FeaturesProps = {
  children: React.ReactNode;
};

const Features = ({ children }: FeaturesProps) => {
  return (
    <section className={`${classes.features} section-center`}>
      {children}
    </section>
  );
};

export default Features;
