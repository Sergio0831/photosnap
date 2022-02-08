import { motion } from "framer-motion";
import useScroll from "../hooks/useOnScroll";
import { useAppContext } from "../store/context";
import { fadeIn } from "../utils/animations";
import classes from "./SwitchContainer.module.scss";

type SwitchContainerProps = {
  children: React.ReactNode;
};

const SwitchContainer = ({ children }: SwitchContainerProps) => {
  const { plan } = useAppContext();
  const { controls, element } = useScroll();

  return (
    <motion.div
      className={classes.switcher}
      variants={fadeIn}
      animate={controls}
      ref={element}
    >
      <h4 className={plan === "monthly" ? classes.active : ""}>Monthly</h4>
      {children}
      <h4 className={plan === "yearly" ? classes.active : ""}>Yearly</h4>
    </motion.div>
  );
};

export default SwitchContainer;
