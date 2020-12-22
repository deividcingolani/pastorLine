import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import {
  Checkbox,
  ButtonFooter,
  ButtonClose,
  ShowList,
  DetailedContact,
} from "./modalComponents";
import { Input } from "./modalComponents/Input";

function Modal({
  showModal,
  title,
  handleChangeUrl,
  options,
  status,
  handleScroll,
  dispatchSearch,
}) {
  const [detailedModal, setDetailedModal] = useState(false);
  const [contactSelected, setContactSelected] = useState();

  let inputStyle = {};
  inputStyle = {
    display: "block",
  };

  return (
    <>
      <div
        className="modal-dialog"
        role="document"
        style={{ overflowY: "scroll", maxHeight: "800px" }}
        onScroll={handleScroll}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {title}
            </h5>
            <ButtonClose
              buttonName={"X"}
              btnClose={"btn-close"}
              handleChangeUrl={handleChangeUrl}
            />
          </div>
          <div className="modal-body">
            <Input
              inputName={"search"}
              label="Search"
              disabled={false}
              defaultValue={""}
              dispatchSearch={dispatchSearch}
            />
            <ShowList
              setDetailedModal={setDetailedModal}
              setContactSelected={setContactSelected}
              options={options}
              status={status}
            />
          </div>
          <div className={["modal-footer, ", styles.footer].join(" ")}>
            <div className={styles.buttons}>
              <ButtonFooter
                buttonName={"All Contacts"}
                handleChangeUrl={handleChangeUrl}
                url={"allContacts"}
                colorButton={"#46139f"}
              />
              <ButtonFooter
                buttonName={"US Contacts"}
                handleChangeUrl={handleChangeUrl}
                url={"usContacts"}
                colorButton={"#ff7f50"}
              />
              <ButtonClose buttonName={"Close"} colorButton={"46139f"} />
            </div>
            <Checkbox />
          </div>
        </div>
      </div>
      )}
      {showModal && detailedModal && (
        <DetailedContact
          showModal={showModal}
          detailedModal={detailedModal}
          handleChangeUrl={handleChangeUrl}
          setDetailedModal={setDetailedModal}
          inputStyle={inputStyle}
          contactSelected={contactSelected}
        />
      )}
    </>
  );
}

Modal.defaultProps = {
  title: "Modal Title",
  showModal: false,
};
Modal.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string,
  handleChangeUrl: PropTypes.func,
};

export default Modal;
