import React from "react";
import styles from "../styles.module.scss";

export function Checkbox() {
  return (
    <div className={styles.checkBox}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" htmlFor="defaultCheck1">
        Only even
      </label>
    </div>
  );
}
