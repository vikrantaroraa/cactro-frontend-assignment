import styles from "./index.module.css";
import waveImage from "src/assets/images/wave-hand.jpg";

const CustomerSupport = () => {
  return (
    <div className={styles["container"]}>
      <span className={styles["message"]}>
        Hey there 👋 want to know something cool
      </span>
      <span className={styles["wave-image"]}>
        <img src={waveImage} alt="wave" height={20} width={20} />
      </span>
    </div>
  );
};

export default CustomerSupport;
