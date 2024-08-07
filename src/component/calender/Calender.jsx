import React, { useRef, useState, useEffect } from "react";
import styles from "./Calender.module.scss";

import Content from "./Content";
import Dialog from "./Dialog";
import Dues from "./Dues";
const Calender = (props) => {
  const test = new Date();
  const [year, setYear] = useState(test.getFullYear());
  const Months = {
    January: 31,
    Febuary: year % 4 == 0 ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const [dialog, setDialog] = useState(false);
  const [month, setMonth] = useState(test.getMonth());
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [selectedDate, setSelectedDate] = useState({
    date: test.getDate(),
    month: test.getMonth(),
    year: test.getFullYear(),
  });
  const [Month, Dates] = Object.entries(Months)[month];
  const calenderRef = useRef();

  const handleChangeYear = (setting) => {
    if (setting === "forward") {
      setMonth(0);
      setYear((year) => year + 1);
      return;
    }

    setMonth(11);
    setYear((year) => year - 1);
  };
  const handleHover = (e) => {
    if (!dialog) {
      const getBound = calenderRef.current.getBoundingClientRect();
      setClientX(((e.clientX - getBound.x + 4) / getBound.width) * 100);
      setClientY(((e.clientY - getBound.y + 5) / getBound.height) * 100);
    }
  };
  return (
    <>
      <div className={styles.box} ref={calenderRef}>
        <div className={styles["d-flex-column"]}>
          <div
            className={`${styles["d-flex-row"]} ${styles["calender-title"]} ${styles["w-100"]} ${styles["justify-between"]}`}
          >
            <div className={styles.title}>
              {Month} {year}
            </div>
            <div className={`${styles["d-flex-row"]} ${styles.action}`}>
              <div
                className={`${styles.button} ${styles["button-outline-blue"]} ${styles["button-circle"]}`}
                onClick={() =>
                  month !== 0
                    ? setMonth((month) => month - 1)
                    : handleChangeYear("backward")
                }
              >
                &lt;
              </div>
              <div
                className={`${styles.button} ${styles["button-outline-blue"]} ${styles["button-circle"]}`}
                onClick={() =>
                  month !== 11
                    ? setMonth((month) => month + 1)
                    : handleChangeYear("forward")
                }
              >
                &gt;
              </div>
            </div>
          </div>
          <Content
            Year={year}
            Date={Dates}
            Month={month}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            handleHover={handleHover}
            setDialog={setDialog}
            dialog={dialog}
          />
          <Dues height="250px" />
          <Dialog
            clientX={clientX}
            clientY={clientY}
            dialog={dialog}
            setDialog={setDialog}
          />
        </div>
      </div>
    </>
  );
};

export default Calender;
