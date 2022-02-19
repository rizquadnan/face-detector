import { Navigation } from "../Navigation/Navigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header-inner']}>
      <Navigation />
      </div>
    </header>
  )
};

export { Header };