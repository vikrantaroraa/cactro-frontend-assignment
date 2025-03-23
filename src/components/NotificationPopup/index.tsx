import { useState } from "react";
import styles from "./index.module.css";

const NotificationPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <div
      className={`${styles["notification-popup"]} ${
        isPopupOpen ? "" : styles["notification-popup-hidden"]
      }`}
    >
      <span className={styles["notification-popup-text"]}>
        <span className={styles["slack-hq-message"]}>
          Slack is your digital HQ.{" "}
        </span>
        Meet the new feature keeping teams connected in work-from-anywhere
        world. <span className={styles["cta-message"]}>Lets Go</span>
      </span>
      <span
        className={styles["close-popup"]}
        onClick={() => setIsPopupOpen(false)}
      >
        X
      </span>
    </div>
  );
};

export default NotificationPopup;
