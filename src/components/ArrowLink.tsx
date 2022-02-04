import { Link } from "../types/Link.types";
import classes from "./ArrowLink.module.scss";
import Button from "./Button";
import Icon from "./Icon";

type ArrowLinkProps = Link;

const ArrowLink = ({ link, theme, btnText }: ArrowLinkProps) => {
  return (
    <div className={classes.btn__container}>
      <Button link={link} className={`btn-outline--${theme}`}>
        {btnText}
        <Icon color={theme === "dark" ? "#fff" : "#000"} icon='arrow' />
      </Button>
    </div>
  );
};

export default ArrowLink;
