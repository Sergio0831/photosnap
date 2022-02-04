import classes from "./PricingCards.module.scss";

type PricingCardsProps = {
  children: React.ReactNode;
};

const PricingCards = ({ children }: PricingCardsProps) => {
  return <div className={classes.cards}>{children}</div>;
};

export default PricingCards;
