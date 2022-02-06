import classes from "./Compare.module.scss";

type CompareProps = {
  children: React.ReactNode;
};

const Compare = ({ children }: CompareProps) => {
  return (
    <section className={`${classes.compare} section-center`}>
      <h2>compare</h2>
      {children}
    </section>
  );
};

export default Compare;
