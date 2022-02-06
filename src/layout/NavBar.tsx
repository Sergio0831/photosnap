import clsx from "clsx";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import NavbarList from "./NavbarList";
import classes from "./NavBar.module.scss";

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
