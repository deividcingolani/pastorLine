import styles from "../styles.module.scss";
import React from "react";
export default function (setToggleUS, setToggleAll, buttonName) {
  return (
    <button
      type="button"
      className={["btn btn-secondary", styles.button].join(" ")}
      data-bs-dismiss="modal"
      onClick={() => {
        setToggleUS(false);
        setToggleAll(false);
      }}
    >
      {buttonName}
    </button>
  );
}
