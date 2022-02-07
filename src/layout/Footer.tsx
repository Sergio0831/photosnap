import ArrowLink from "../components/ArrowLink";
import Button from "../components/Button";
import GenericList from "../components/GenericList";
import Logo from "../components/Logo";
import NavbarList from "./NavbarList";
import { socials } from "../data/socials";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footer__wrapper} section-center`}>
        <div className={classes.footer__left}>
          <Button link='/' aria-label='Footer Logo'>
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
                    aria-label={social.className}
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
          <ArrowLink link='/pricing' theme='dark' btnText='get an invite' />
          <p className={classes.footer__copy}>
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
