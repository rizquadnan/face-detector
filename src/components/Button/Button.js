import classes from "./Button.module.css";

function Button({ onClick, children }) {
  return <button className={classes.button} onClick={onClick}>{ children } </button>;
}

export { Button };
