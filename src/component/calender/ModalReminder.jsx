import React, { useState } from "react";
import Timepicker from "./Timepicker";
import styles from "./Calender.module.scss";
const ModalReminder = ({ buble, setBuble }) => {
  const [giliran, setGiliran] = useState("");
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "26px" }}>
        Add Reminder
      </h1>
      <div
        className={styles["d-flex-row"]}
        style={{ gap: "10px", flexWrap: "wrap" }}
      >
        <Timepicker
          inputId="before"
          setBuble={setBuble}
          buble={buble}
          style={{ fontSize: "15px" }}
          giliran={giliran}
          setGiliran={setGiliran}
        />
        <Timepicker
          inputId="after"
          setBuble={setBuble}
          buble={buble}
          style={{ fontSize: "15px" }}
          giliran={giliran}
          setGiliran={setGiliran}
        />
        <button
          className={styles["button"]}
          style={{ padding: "0.55rem", fontSize: "16px" }}
        >
          Add Reminder
        </button>
      </div>
    </>
  );
};

export default ModalReminder;
