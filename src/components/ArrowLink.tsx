import classes from "./ArrowLink.module.scss";
import Button from "./Button";
import Icon from "./Icon";

type ArrowLinkProps = {
  link: string;
  theme: string;
  btnText: string;
};

const ArrowLink = ({ link, theme, btnText }: ArrowLinkProps) => {
  return (
    <div className={classes.btn__container}>
      <Button link={link} className={`btn-outline--${theme}`}>
        {btnText}
      </Button>
      <Icon color={theme === "dark" ? "#fff" : "#000"} icon='arrow' />
    </div>
  );
};

export default ArrowLink;
