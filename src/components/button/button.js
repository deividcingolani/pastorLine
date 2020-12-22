import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

function ButtonPrimary({ text, handleChangeUrl }) {
  let colorButton;
  if (text === "All Contacts") {
    colorButton = "#46139f";
  } else {
    colorButton = "#ff7f50";
  }
  return (
    <button
      type="button"
      className={["btn btn-primary", styles.button].join(" ")}
      onClick={() => {
        if (text === "All Contacts") {
          handleChangeUrl("allContacts");
        } else {
          handleChangeUrl("usContacts");
        }
      }}
      style={{ backgroundColor: colorButton }}
    >
      {text}
    </button>
  );
}
ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  handleChangeUrl: PropTypes.func,
};
export default ButtonPrimary;
