import { FeatureTypes } from "../types/Feature.types";
import Icon from "./Icon";
import classes from "./Feature.module.scss";

type FeatureProps = {
  feature: FeatureTypes;
};

const Feature = ({ feature }: FeatureProps) => {
  return (
    <article className={classes.feature}>
      <Icon icon={feature.icon} size={72} className={classes.feature__icon} />
      <h4>{feature.title}</h4>
      <p>{feature.text}</p>
    </article>
  );
};

export default Feature;
