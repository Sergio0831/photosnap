import clsx from "clsx";
import { motion } from "framer-motion";
import { useAppContext } from "../store/context";
import classes from "./Switch.module.scss";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const Switch = () => {
  const { isOn, toggleSwitch } = useAppContext();

  const switchClasses = clsx({
    [classes.switch]: true,
    [classes.switch__on]: isOn
  });

  const switchSliderClasses = clsx({
    [classes.slider]: true,
    [classes.slider__on]: isOn
  });

  return (
    <div className={switchClasses} onClick={toggleSwitch}>
      <motion.div layout transition={spring} className={switchSliderClasses} />
    </div>
  );
};

export default Switch;
