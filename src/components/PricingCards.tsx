import { motion } from "framer-motion";
import useScroll from "../hooks/useOnScroll";
import { container } from "../utils/animations";
import classes from "./PricingCards.module.scss";

type PricingCardsProps = {
  children: React.ReactNode;
};

const PricingCards = ({ children }: PricingCardsProps) => {
  const { controls, element } = useScroll();

  return (
    <motion.div
      variants={container}
      animate={controls}
      ref={element}
      className={classes.cards}
    >
      {children}
    </motion.div>
  );
};

export default PricingCards;
