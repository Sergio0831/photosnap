import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import NavBar from "./NavBar";
import classes from "./Header.module.scss";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import clsx from "clsx";

const Header = () => {
  const { isOpen, toggleNav } = useAppContext();

  const menuBtnClasses = clsx({
    [classes.menu__btn]: true,
    [classes.open]: isOpen
  });

  return (
    <header className={`${classes.header} section-center`}>
      <div className={classes.container}>
        <Link to='/' className={classes.logo}>
          <Logo />
        </Link>
        <Button
          type='button'
          className={menuBtnClasses}
          onClick={toggleNav}
        ></Button>
      </div>
      <NavBar />
      <Button className={`${classes.header__btn} btn-fill--dark`} type='button'>
        get in invite
      </Button>
    </header>
  );
};

export default Header;
