import clsx from "clsx";
import { useAppContext } from "../store/context";
import { Price } from "../types/Price.types";
import Button from "./Button";
import classes from "./PricingCard.module.scss";

type PricingCardProps = {
  card: Price;
};

const PricingCard = ({ card }: PricingCardProps) => {
  const { plan, isOn } = useAppContext();
  const index = isOn ? 1 : 0;
  const cardClasses = clsx({
    [classes.card]: true,
    [classes.card__popular]: card.popular
  });

  return (
    <div className={cardClasses}>
      <div className={classes.card__text}>
        {" "}
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      <div className={classes.card__price}>
        <h2>{card.price[index].amount}</h2>
        <span>{plan === "monthly" ? "per month" : "per year"}</span>
      </div>
      <Button
        type='button'
        className={card.popular ? "btn-fill--light" : "btn-fill--dark"}
      >
        pick plan
      </Button>
    </div>
  );
};

export default PricingCard;
