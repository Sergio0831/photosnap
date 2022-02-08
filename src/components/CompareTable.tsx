import classes from "./CompareTable.module.scss";
import Icon from "./Icon";
import { planFeatures } from "../data/plan-features";
import { motion } from "framer-motion";
import useScroll from "../hooks/useOnScroll";
import { fadeIn } from "../utils/animations";

const features = [
  ...planFeatures[0].features,
  ...planFeatures[1].features,
  ...planFeatures[2].features
];

const uniqueFeatures = [...new Set(features.map((item) => item))];

const CompareTable = () => {
  const { controls, element } = useScroll();

  return (
    <motion.div
      className={classes.table}
      variants={fadeIn}
      animate={controls}
      ref={element}
    >
      <div className={classes.table__head}>
        <ul className={classes.row}>
          <li className={classes.table__heading}>
            <h6>the features</h6>
          </li>
          <ul>
            {planFeatures.map((item, index) => (
              <li key={index} className={classes.table__heading}>
                <h6>{item.plan}</h6>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div className={classes.table__body}>
        {uniqueFeatures.map((item, index) => (
          <ul key={index} className={classes.row}>
            <li className={classes.table__data}>
              <h6>{item}</h6>
            </li>
            <ul>
              {planFeatures[0].features.find((feature) => feature === item) ? (
                <li className={classes.table__data}>
                  <span>basic</span>
                  <Icon icon='check' />
                </li>
              ) : (
                <li className={classes.table__data}>
                  <span>basic</span>
                </li>
              )}
              {planFeatures[1].features.find((feature) => feature === item) ? (
                <li className={classes.table__data}>
                  <span>pro</span>
                  <Icon icon='check' />
                </li>
              ) : (
                <li className={classes.table__data}>
                  <span>pro</span>
                </li>
              )}
              {planFeatures[2].features.find((feature) => feature === item) ? (
                <li className={classes.table__data}>
                  <span>bussines</span>
                  <Icon icon='check' />
                </li>
              ) : (
                <li className={classes.table__data}>
                  <span>bussines</span>
                </li>
              )}
            </ul>
          </ul>
        ))}
      </div>
    </motion.div>
  );
};

export default CompareTable;
