import React from "react";
import styles from "./styles.module.scss";
function ButtonPrimary({ text }) {
  return (
    <button
      type="button"
      className={["btn btn-primary", styles.button].join(" ")}
    >
      {text}
    </button>
  );
}

export default ButtonPrimary;
