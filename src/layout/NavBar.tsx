import clsx from "clsx";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import classes from "./NavBar.module.scss";
import NavbarList from "./NavbarList";

const NavBar = () => {
  const { isOpen, closeNavBar } = useAppContext();

  const navBarClasses = clsx({
    [classes.nav]: true,
    [classes.open]: isOpen
  });

  return (
    <nav className={navBarClasses}>
      <NavbarList />
      <Button
        className={`${classes.nav__btn} btn-fill--dark`}
        type='button'
        onClick={closeNavBar}
      >
        get in invite
      </Button>
    </nav>
  );
};

export default NavBar;
