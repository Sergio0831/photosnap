import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../store/context";
import classes from "./NavBarList.module.scss";

type NavListProps = {
  footer?: boolean;
  className?: string;
};

const NavbarList = ({ footer, className }: NavListProps) => {
  const { closeNavBar } = useAppContext();

  const navListClasses = clsx(
    {
      [classes.navlist]: true
    },
    className
  );

  return (
    <ul className={navListClasses}>
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
  );
};

export default NavbarList;
