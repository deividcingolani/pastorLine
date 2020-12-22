import { ButtonClose } from "./ButtonClose";
import styles from "../styles.module.scss";

export function DetailedContact(
  showModal,
  detailedModal,
  handleChangeUrl,
  setDetailedModal,
  inputStyle
) {
  return (
    <div
      className={["modal fade", showModal && detailedModal ? "show" : ""].join(
        " "
      )}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={inputStyle}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Detailed of Contact
            </h5>
            <ButtonClose
              buttonName={"X"}
              btnClose={"btn-close"}
              handleChangeUrl={handleChangeUrl}
            />
          </div>
          <div className={["modal-footer, ", styles.footer].join(" ")}>
            <div className={styles.buttons}>
              <ButtonClose
                handlerDetailed={setDetailedModal}
                buttonName={"Close"}
                colorButton={"46139f"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
