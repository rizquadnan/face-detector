import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  )
};

export { Header };