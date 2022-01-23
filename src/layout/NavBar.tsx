import clsx from "clsx";
import Button from "../components/Button";
import { useAppContext } from "../store/context";
import classes from "./NavBar.module.scss";

type NavBarProps = {
  footer?: boolean;
};

const NavBar = ({ footer }: NavBarProps) => {
  const { isOpen } = useAppContext();

  const navBarClasses = clsx({
    [classes.nav]: true,
    [classes.open]: isOpen
  });

  return (
    <nav className={navBarClasses}>
      <ul>
        {footer && (
          <li>
            <Button link='/'>home</Button>
          </li>
        )}
        <li>
          <Button link='/stories'>stories</Button>
        </li>
        <li>
          <Button link='/features'>features</Button>
        </li>
        <li>
          <Button link='/pricing'>pricing</Button>
        </li>
      </ul>
      <Button className={`${classes.nav__btn} btn-fill--dark`} type='button'>
        get in invite
      </Button>
    </nav>
  );
};

export default NavBar;
