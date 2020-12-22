import { ButtonClose } from "./ButtonClose";
import styles from "../styles.module.scss";
import { Input } from "./Input";

export function DetailedContact({
  showModal,
  detailedModal,
  handleChangeUrl,
  setDetailedModal,
  inputStyle,
  contactSelected,
}) {
  console.log(contactSelected);
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
            <div className={styles.inputs}>
              <Input
                inputName={"Name"}
                label="Name"
                disabled={"true"}
                defaultValue={
                  contactSelected.first_name + " " + contactSelected.last_name
                }
              />
              <Input
                inputName={"email"}
                label="Email"
                disabled={"true"}
                defaultValue={contactSelected.email}
              />
              <Input
                inputName={"country"}
                label="Country"
                disabled={"true"}
                defaultValue={contactSelected.country.iso}
              />
              <Input
                inputName={"Email"}
                label="Email"
                disabled={"true"}
                defaultValue={contactSelected.email}
              />
              <Input
                inputName={"phoneNumber"}
                label="Phone Number"
                disabled={"true"}
                defaultValue={contactSelected.phone_number}
              />
            </div>

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
