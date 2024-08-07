import React, { Component } from "react";
import ReactDOM from "react-dom";
import Due from "./Due";

import styles from "./Calender.module.scss";
import Reminder from "./Reminder";
const Dues = ({ height }) => {
  return (
    <>
      <div className={styles.alert}>There are 4 dues left</div>
      <div className={styles["list-of-dues"]} style={{ maxHeight: height }}>
        <Due status="danger" progress={50} />
        <Due status="warning" progress={20} />
        <Due status="normal" progress={40} />
        <Due status="prioritize" progress={20} />
        <Reminder />
      </div>
    </>
  );
};

export default Dues;
