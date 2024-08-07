import React, { useEffect, useRef, useState, useCallback } from "react";

import Timepicker from "./Timepicker";
import styles from "./Calender.module.scss";
const ModalDues = ({ buble, setBuble }) => {
  const [giliran, setGiliran] = useState("");
  const [prioritize, setPrioritize] = useState(false);
  return (
    <>
      <h1 className={styles.title} style={{ fontSize: "26px" }}>
        Add Dues
      </h1>
      <div
        className={styles["d-flex-row"]}
        style={{ gap: "10px", flexWrap: "wrap" }}
      >
        <input
          type="text"
          placeholder="Input Text"
          className={styles.input}
          style={{ fontSize: "15px" }}
        />
        <Timepicker
          setBuble={setBuble}
          buble={buble}
          style={{ fontSize: "15px" }}
          inputId="hour"
          giliran={giliran}
          setGiliran={setGiliran}
        />
        <button
          className={styles["button"]}
          style={{ padding: "0.55rem", fontSize: "16px" }}
        >
          Add Dues
        </button>
      </div>
      <div
        className={styles["d-flex-row"]}
        style={{ columnGap: "10px", width: "55%", alignItems: "center" }}
      >
        <div
          className={`${styles["slider-container"]} ${
            prioritize && styles.active
          }`}
          onClick={() => setPrioritize((prioritize) => !prioritize)}
        >
          <div className={styles.slider}></div>
        </div>
        <label style={{ flex: 2 }}>Set to prioritize</label>
      </div>
    </>
  );
};

export default ModalDues;
