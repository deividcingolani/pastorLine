import styles from "../styles.module.scss";
import React from "react";

export function checkbox() {
  return (
    <div className={styles.checkBox}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Default checkbox
      </label>
    </div>
  );
}
