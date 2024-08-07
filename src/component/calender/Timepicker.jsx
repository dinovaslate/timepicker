import React, { useState, useEffect } from "react";
import styles from "./Timepicker.module.scss";
import useDidMountEffect from "../../config/utils/useDidMount";
import "./classes.scss";
import lodash from "lodash";
import _ from "lodash";
const Timepicker = ({
  style,
  setBuble,
  buble,
  giliran,
  setGiliran,
  inputId,
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const [value, setValue] = useState("");
  const [dayOrNight, setDayOrNight] = useState("AM");
  const LastIndex = 1;
  const [indexSlide, setIndexSlide] = useState(0);
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const rect = button.getBoundingClientRect();

    circle.style.left = `${event.clientX - rect.left}px`;
    circle.style.top = `${event.clientY - rect.top}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const handleNext = (e) => {
    createRipple(e);
    setIndexSlide((index) => index + 1);
  };
  const handlePrev = (e) => {
    createRipple(e);
    setIndexSlide((index) => index - 1);
  };
  useDidMountEffect(() => {
    if (giliran !== inputId) {
      setOpen(false);
      setBuble(false);
    }
  }, [giliran]);

  useEffect(() => {
    const hour = active < 10 ? "0" + active : active;
    const minutes = active2 < 10 ? "0" + active2 : active2;
    setValue(`${hour}:${minutes}`);
  }, [active, active2]);
  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Select Date"
          readOnly
          className={styles.inputTime}
          value={value}
          style={style}
          onClick={() => {
            setOpen(!open);
            setBuble(!buble);
            setGiliran(inputId);
          }}
        />
        <div
          className={styles.inputBox}
          style={{
            "--translate": `${indexSlide * -135}%`,
            "--background": `${
              dayOrNight === "PM" ? "#292b2c" : "rgb(236, 231, 231)"
            }`,
            "--invert": `${dayOrNight === "PM" && "100%"}`,
            "--background-text": `${
              dayOrNight === "PM" ? "#111111" : "#5151FB"
            }`,
            "--unactive-text": `${
              dayOrNight === "PM" ? "rgba(255,255,255,0.4)" : "#5151FB"
            }`,
            "--visibility": `${open ? "visible" : "hidden"}`,
            "--opacity": `${open ? "1" : "0"}`,
          }}
        >
          <div
            className={`${styles.clock} second`}
            style={{
              "--rotate": `${active * 30}deg`,
            }}
          >
            <div className={styles.hand}></div>
            <div className={styles["clock-center"]}></div>
            {_.range(0, 12).map((number) => (
              <div
                className={`${styles.number} ${styles[`number${number}`]}`}
                onClick={() => setActive(number)}
                style={{ color: `${active == number ? "white" : "black"}` }}
                key={number}
              >
                {number === 0 ? 12 : number}
              </div>
            ))}
          </div>
          <div
            className={`${styles.clock}`}
            style={{ "--rotate": `${(active2 / 5) * 30}deg` }}
          >
            <div className={styles.hand}></div>
            <div className={styles["clock-center"]}></div>
            {_.range(0, 12).map((number) => (
              <div
                className={`${styles.number} ${styles[`number${number}`]}`}
                onClick={() => setActive2(number * 5)}
                style={{
                  color: `${active2 == number * 5 ? "white" : "black"}`,
                }}
                key={number}
              >
                {number === 0 ? "00" : number === 1 ? "05" : number * 5}
              </div>
            ))}
          </div>
          {indexSlide == LastIndex || (
            <div className={styles["lmao"]} onClick={handleNext}>
              NEXT
            </div>
          )}
          {indexSlide == LastIndex && (
            <div
              className={styles["lmao"]}
              onClick={() => {
                setOpen(false);
                setBuble(true);
              }}
            >
              OK
            </div>
          )}

          {indexSlide > 0 && (
            <div className={styles["lmao2"]} onClick={handlePrev}>
              PREV
            </div>
          )}
          <div
            className={`${styles["am"]} ${
              dayOrNight === "AM" && styles["active"]
            }`}
            onClick={() => setDayOrNight("AM")}
          >
            AM
          </div>
          <div
            className={`${styles["pm"]} ${
              dayOrNight === "PM" && styles["active"]
            }`}
            onClick={() => setDayOrNight("PM")}
          >
            PM
          </div>
        </div>
      </div>
    </>
  );
};

export default Timepicker;
