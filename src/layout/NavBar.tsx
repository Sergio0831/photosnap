import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import classes from "./NavBar.module.scss";

type NavBarProps = {
  footer?: boolean;
};

const NavBar = ({ footer }: NavBarProps) => {
  const { isOpen, closeNavBar } = useAppContext();

  const navBarClasses = clsx({
    [classes.nav]: true,
    [classes.open]: isOpen
  });

  return (
    <nav className={navBarClasses}>
      <ul>
        {footer && (
          <li>
            <NavLink to='/' className={classes.nav__link}>
              home
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to='/stories'
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
            onClick={closeNavBar}
          >
            stories
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/features'
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
            onClick={closeNavBar}
          >
            features
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pricing'
            className={({ isActive }) =>
              isActive ? `${classes.activeLink}` : ""
            }
            onClick={closeNavBar}
          >
            pricing
          </NavLink>
        </li>
      </ul>
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
