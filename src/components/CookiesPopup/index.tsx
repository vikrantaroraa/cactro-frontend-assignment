import React, { useState } from "react";
import styles from "./index.module.css";

const CookiesPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  return (
    <div
      className={`${styles["container"]} ${
        isPopupOpen ? "" : styles["container-hidden"]
      }`}
    >
      <div
        className={styles["close-popup-btn"]}
        onClick={() => setIsPopupOpen(false)}
      >
        x
      </div>
      <p>
        This website uses cookies to enhance user experience and to analyze
        performance and traffic on our website. We also share information about
        your use of our site with out social media advertising and analytics
        partners. <span className={styles["know-more-link"]}>More Info</span>
      </p>
      <button
        className={styles["accept-cookies-btn"]}
        onClick={() => setIsPopupOpen(false)}
      >
        Accept All Cookies
      </button>
    </div>
  );
};

export default CookiesPopup;
