import React, { Component, useState } from "react";
import styles from "./Calender.module.scss";
import Dues from "./Dues";
import Modal from "./Modal";
const Dialog = ({ clientX, clientY, dialog, setDialog }) => {
  const [transition, setTransition] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState("");
  const handleTransition = () => {
    setTransition(true);
    setDialog(false);
    setTimeout(() => {
      setTransition(false);
    }, 1050);
  };
  return (
    <>
      <div
        className={`${styles["calender-dialog"]} ${styles["d-flex-column"]} ${
          dialog && styles["active"]
        } ${transition && styles.transition}`}
        style={{
          "--positionX": `${clientX + "%"}`,
          "--positionY": `${clientY + "%"}`,
        }}
      >
        <div className={`${styles["title-dialog-container"]}`}>
          <div className={styles.title}>
            <button
              className={styles["button-back"]}
              onClick={() => handleTransition()}
            >
              &lt;-
            </button>
            Things to Add
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles["d-flex-row"]} style={{ columnGap: "10px" }}>
            <input
              type="text"
              placeholder="Search"
              className={styles.input}
              style={{ flex: 2 }}
            />
            <button
              className={styles["button"]}
              onClick={() => {
                setOpenModal(true);
                setMode("Reminder");
              }}
            >
              Add Reminder
            </button>
            <button
              className={styles["button"]}
              onClick={() => {
                setOpenModal(true);
                setMode("Dues");
              }}
            >
              Add Dues
            </button>
          </div>
          <Dues height="500px" />
        </div>
        <Modal openModal={openModal} setOpenModal={setOpenModal} mode={mode} />
      </div>
    </>
  );
};

export default Dialog;
