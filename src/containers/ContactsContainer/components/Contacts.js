import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "../../../components/modal/Modal";
import ButtonPrimary from "../../../components/button/button";
import styles from "./styles.module.scss";
import { REQUEST_STATES } from "../../../constants";
import { Spinner } from "../../../components/Spinner";

function Contacts({
  contacts,
  status,
  contactsUS,
  statusUS,
  getContacts,
  getUSContacts,
  getUSSearch,
  getSearch,
}) {
  let location = useLocation();
  let history = useHistory();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (
      status !== REQUEST_STATES.PENDING &&
      status !== REQUEST_STATES.SUCCESS &&
      location.pathname === "/allContacts" &&
      page === 1
    ) {
      getContacts("1");
    }
  }, [page, getContacts, status, location]);
  useEffect(() => {
    if (
      statusUS !== REQUEST_STATES.SUCCESS &&
      statusUS !== REQUEST_STATES.PENDING &&
      location.pathname === "/usContacts" &&
      page === 1
    ) {
      getUSContacts("1");
    }
  }, [page, location, getUSContacts, statusUS]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if (bottom) {
      if (
        location.pathname === "/usContacts" &&
        statusUS !== REQUEST_STATES.PENDING
      )
        getUSContacts(page + 1);
      if (
        location.pathname === "/allContacts" &&
        status !== REQUEST_STATES.PENDING
      )
        getContacts(page + 1);
      setPage(page + 1);
    }
  };

  const handleChangeUrl = (url) => {
    history.replace(`/${url}`);
    window.location.reload(true);
  };

  if (
    (statusUS !== REQUEST_STATES.SUCCESS &&
      location.pathname === "/usContacts") ||
    (status !== REQUEST_STATES.SUCCESS &&
      location.pathname === "/allContacts" &&
      page === 1)
  ) {
    return <Spinner />;
  }

  return (
    <>
      {location.pathname !== "/allContacts" &&
        location.pathname !== "/usContacts" && (
          <div className={styles.buttons}>
            <ButtonPrimary
              text={"All Contacts"}
              handleChangeUrl={handleChangeUrl}
            />
            <ButtonPrimary
              text={"US Contacts"}
              handleChangeUrl={handleChangeUrl}
            />
          </div>
        )}
      <div>
        {location.pathname === "/allContacts" && (
          <Modal
            showModal={location.pathname === "/allContacts"}
            title={"All Contacts"}
            handleChangeUrl={handleChangeUrl}
            options={contacts}
            status={status}
            handleScroll={handleScroll}
            dispatchSearch={getSearch}
          />
        )}
        {location.pathname === "/usContacts" && (
          <Modal
            showModal={location.pathname === "/usContacts"}
            title={"US Contacts"}
            handleChangeUrl={handleChangeUrl}
            options={contactsUS}
            statusUS={statusUS}
            handleScroll={handleScroll}
            dispatchSearch={getUSSearch}
          />
        )}
      </div>
    </>
  );
}

export default Contacts;
