import styles from "../styles.module.scss";
import React from "react";
import { useHistory } from "react-router-dom";

export function ButtonClose({ buttonName, btnClose, handlerDetailed }) {
  let history = useHistory();

  return (
    <button
      type="button"
      className={btnClose || ["btn btn-secondary", styles.button].join(" ")}
      data-bs-dismiss="modal"
      onClick={() => {
        if (handlerDetailed) {
          handlerDetailed(false);
        } else {
          history.replace(`/`);
          window.location.reload(true);
        }
      }}
      style={{
        backgroundColor: "white",
        borderColor: "#46139f",
        color: "black",
      }}
    >
      {buttonName}
    </button>
  );
}
