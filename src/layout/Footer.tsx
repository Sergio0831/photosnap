import ArrowLink from "../components/ArrowLink";
import Button from "../components/Button";
import GenericList from "../components/GenericList";
import Logo from "../components/Logo";
import { socials } from "../data/socials";
import classes from "./Footer.module.scss";
import NavbarList from "./NavbarList";
import Facebook from "../icons/Facebook";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__wrapper} section-center`}>
        <div className={classes.footer__left}>
          <Button link='/'>
            <Logo footer />
          </Button>
          <NavbarList className={classes.footer__navlist} footer />
          <ul className={classes.footer__socials}>
            <GenericList
              items={socials}
              renderItem={(social) => (
                <li key={social.id}>
                  <a
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {social.icon}
                  </a>
                </li>
              )}
            />
          </ul>
        </div>
        <div className={classes.footer__right}>
          <ArrowLink link='/prices' theme='dark' btnText='get an invite' />
          <p className={classes.footer__copy}>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
