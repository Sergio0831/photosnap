import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import NavBar from "./NavBar";
import classes from "./Header.module.scss";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import clsx from "clsx";

const Header = () => {
  const { isOpen, toggleNavBar, closeNavBar } = useAppContext();

  const menuBtnClasses = clsx({
    [classes.menu__btn]: true,
    [classes.open]: isOpen
  });

  return (
    <header className={`${classes.header} section-center`}>
      <div className={classes.container}>
        <Link
          to='/'
          className={classes.logo}
          onClick={closeNavBar}
          aria-label='Logo'
        >
          <Logo />
        </Link>{" "}
        <Button
          type='button'
          className={menuBtnClasses}
          onClick={toggleNavBar}
        ></Button>
      </div>
      <NavBar />
      <Button className={`${classes.header__btn} btn-fill--dark`} type='button'>
        get an invite
      </Button>
    </header>
  );
};

export default Header;
