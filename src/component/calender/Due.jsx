import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import styles from "./Calender.module.scss";
import lmao from "./static/lmao.PNG";
import lmao2 from "./static/lmao2.PNG";
import lmao3 from "./static/lmao3.PNG";
import lmao4 from "./static/lmao4.PNG";
const Due = ({ status, progress }) => {
  const getImages = () => {
    switch (status) {
      case "danger":
        return <img src={lmao} style={{ width: "100%" }} />;
      case "warning":
        return <img src={lmao2} style={{ width: "100%" }} />;
      case "prioritize":
        return <img src={lmao4} style={{ width: "100%" }} />;
      default:
        return <img src={lmao3} style={{ width: "100%" }} />;
    }
  };
  return (
    <div
      className={`${styles["d-flex-row"]} ${styles["dues"]} ${styles[status]} ${styles["align-center"]}`}
    >
      <div className={styles.imageBox}>{getImages()}</div>
      <div
        className={`${styles["d-flex-column"]} ${styles["justify-around"]} ${styles.activity}`}
      >
        <div className={`${styles["activity-title"]}`}>Meeting with client</div>
        <div
          className={styles["progress-bar"]}
          style={{ "--width": progress }}
        ></div>
      </div>
      <div className={`${styles[`d-flex-row`]} ${styles["clock"]}`}>
        <FontAwesomeIcon icon={faClockFour} />
        <div>09:00</div>
      </div>
    </div>
  );
};

export default Due;
