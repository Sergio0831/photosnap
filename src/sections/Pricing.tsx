import classes from "./Pricing.module.scss";

type PricingProps = {
  children: React.ReactNode;
};

const Pricing = ({ children }: PricingProps) => {
  return (
    <section className={`${classes.pricing} section-center`}>
      {children}
    </section>
  );
};

export default Pricing;
