import { FeatureTypes } from "../types/Feature.types";
import Icon from "./Icon";
import classes from "./Feature.module.scss";
import { container, fadeIn, fadeInUp } from "../utils/animations";
import useOnScroll from "../hooks/useOnScroll";
import { motion } from "framer-motion";

type FeatureProps = {
  feature: FeatureTypes;
};

const Feature = ({ feature }: FeatureProps) => {
  const { element, controls } = useOnScroll();

  return (
    <motion.article
      className={classes.feature}
      variants={container}
      animate={controls}
      ref={element}
    >
      <motion.div variants={fadeIn}>
        <Icon icon={feature.icon} size={72} className={classes.feature__icon} />
      </motion.div>
      <motion.h4 variants={fadeInUp}>{feature.title}</motion.h4>
      <motion.p variants={fadeInUp}>{feature.text}</motion.p>
    </motion.article>
  );
};

export default Feature;
