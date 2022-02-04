import { useAppContext } from "../store/context";
import classes from "./SwitchContainer.module.scss";

type SwitchContainerProps = {
  children: React.ReactNode;
};

const SwitchContainer = ({ children }: SwitchContainerProps) => {
  const { plan } = useAppContext();

  return (
    <div className={classes.switcher}>
      <h4 className={plan === "monthly" ? classes.active : ""}>Monthly</h4>
      {children}
      <h4 className={plan === "yearly" ? classes.active : ""}>Yearly</h4>
    </div>
  );
};

export default SwitchContainer;
