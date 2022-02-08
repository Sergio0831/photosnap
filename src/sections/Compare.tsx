import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import useScroll from "../hooks/useOnScroll";
import classes from "./Compare.module.scss";

type CompareProps = {
  children: React.ReactNode;
};

const Compare = ({ children }: CompareProps) => {
  const { controls, element } = useScroll();

  return (
    <section className={`${classes.compare} section-center`}>
      <motion.h2 variants={fadeIn} animate={controls} ref={element}>
        compare
      </motion.h2>
      {children}
    </section>
  );
};

export default Compare;
