import classes from "./Button.module.css";

function Button({ onClick, children, isDisabled }) {
  return <button className={classes.button} onClick={onClick} disabled={isDisabled}>{ children } </button>;
}

export { Button };
