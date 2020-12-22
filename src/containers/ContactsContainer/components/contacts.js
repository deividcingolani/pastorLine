import React from "react";
import Modal from "../../../components/modal";
import ButtonPrimary from "../../../components/button/button";
import styles from "./styles.module.scss";

function Contacts() {
  return (
    <>
      <div className={styles.buttons}>
        <ButtonPrimary text={"Button A"} />
        <ButtonPrimary text={"Button B"} />
      </div>
      <Modal />
    </>
  );
}

export default Contacts;
