import styles from "../styles.module.scss";
import React from "react";

export function ButtonFooter({
  buttonName,
  colorButton,
  handleChangeUrl,
  url,
}) {
  return (
    <button
      type="button"
      className={["btn btn-secondary", styles.button].join(" ")}
      data-bs-dismiss="modal"
      onClick={() => handleChangeUrl(url)}
      style={{ backgroundColor: colorButton }}
    >
      {buttonName}
    </button>
  );
}
