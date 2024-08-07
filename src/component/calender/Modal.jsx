import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Calender.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons";
import useDidMountEffect from "../../config/utils/useDidMount";
import ModalDues from "./ModalDues";
import ModalReminder from "./ModalReminder";
const Modal = ({ openModal, setOpenModal, mode }) => {
  const modalRef = useRef();
  const [buble, setBuble] = useState(true);
  const eventListener = useCallback((e) => {
    if (!modalRef.current.contains(e.target)) {
      setOpenModal(false);
    }
  }, []);
  useEffect(() => {
    document.body.addEventListener("click", eventListener, true);
    return () => {
      document.body.removeEventListener("click", eventListener, true);
    };
  }, []);
  useDidMountEffect(() => {
    console.log("hello the buble is", buble);
    if (buble) {
      document.body.addEventListener("click", eventListener, true);
    } else {
      console.log("I'm in false mode");
      document.body.removeEventListener("click", eventListener, true);
    }
  }, [buble]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${openModal && styles["modal-active"]}`}
      ></div>
      <div
        className={`${styles.modal} ${openModal && styles["modal-active"]}`}
        id="modal"
        ref={modalRef}
      >
        {mode === "Dues" ? (
          <ModalDues buble={buble} setBuble={setBuble} />
        ) : (
          <ModalReminder buble={buble} setBuble={setBuble} />
        )}
        <div
          className={styles["close-button"]}
          onClick={() => setOpenModal(false)}
        >
          <FontAwesomeIcon icon={faTimesSquare} />
        </div>
      </div>
    </>
  );
};

export default Modal;
