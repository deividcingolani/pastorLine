import React from "react";
import PropTypes from "prop-types";
import styles from "../styles.module.scss";

export function Input({
  defaultValue,
  disabled,
  inputName,
  label,
  dispatchSearch,
}) {
  return (
    <div className={styles.input}>
      <label className={styles.label}>{label}</label>

      <input
        className={styles.inputBox}
        name={inputName}
        defaultValue={defaultValue}
        disabled={disabled}
        onKeyUp={(e) => {
          setTimeout(() => {
            dispatchSearch({ page: 1, search: e.target.value });
            console.log(e.target.value);
          }, 1000);

          if (e.key === "Enter") {
            dispatchSearch({ page: 1, search: e.target.value });
            console.log(e.target.value);
          }
        }}
      />
    </div>
  );
}

Input.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
