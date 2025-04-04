import React from "react";
import styles from "./index.module.css";
import slackLogo from "src/assets/images/slack-logo.png";
import { Button } from "src/components/Button";

const signInButtonStyles = {
  border: "none",
  color: "#1d1d1d",
  padding: "0.5rem 0",
};

const talkButtonStyles = {
  border: "1px solid #611f69",
  color: "#611f69",
  padding: "0.5rem 0",
  borderRadius: "4px",
};

const tryButtonStyles = {
  border: "none",
  backgroundColor: "#611f69",
  color: "#fff",
  padding: "0.5rem 0",
  borderRadius: "4px",
};

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-left"]}>
        <img src={slackLogo} alt="Slack Logo" className={styles["logo"]} />
        <nav className={styles["nav-links"]}>
          <a href="#" className={styles["nav-item"]}>
            Product <span className={styles["chevron"]}>▼</span>
          </a>
          <a href="#" className={styles["nav-item"]}>
            Enterprise
          </a>
          <a href="#" className={styles["nav-item"]}>
            Resources
          </a>
          <a href="#" className={styles["nav-item"]}>
            Pricing
          </a>
        </nav>
      </div>
      <div className={styles["header-right"]}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m18.78 17.72c.1467.1467.22.3233.22.53 0 .2133-.0733.39-.22.53-.16.1467-.3367.22-.53.22-.2067 0-.3833-.0733-.53-.22l-4.47-4.47c-.6667.54-1.4067.9567-2.22 1.25-.8067.2933-1.65.44-2.53.44-1.36 0-2.61333-.3367-3.76-1.01s-2.05667-1.5833-2.73-2.73-1.01-2.4-1.01-3.76.33667-2.61333 1.01-3.76 1.58333-2.05667 2.73-2.73 2.4-1.01 3.76-1.01 2.6133.33667 3.76 1.01 2.0567 1.58333 2.73 2.73 1.01 2.4 1.01 3.76c0 .88-.1467 1.7267-.44 2.54-.2933.8067-.71 1.5433-1.25 2.21zm-10.28-3.22c1.08667 0 2.0867-.27 3-.81.92-.54 1.65-1.2667 2.19-2.18.54-.92.81-1.92333.81-3.01s-.27-2.08667-.81-3c-.54-.92-1.27-1.65-2.19-2.19-.9133-.54-1.91333-.81-3-.81s-2.09.27-3.01.81c-.91333.54-1.64 1.27-2.18 2.19-.54.91333-.81 1.91333-.81 3s.27 2.09.81 3.01c.54.9133 1.26667 1.64 2.18 2.18.92.54 1.92333.81 3.01.81z"
            stroke="#000"
            stroke-width=".5"
          ></path>
        </svg>
        <Button
          style={signInButtonStyles}
          onClick={() => alert("Canary Design is awesome!")}
        >
          Sign In
        </Button>
        <Button
          style={talkButtonStyles}
          onClick={() => alert("Canary Design is awesome!")}
        >
          Talk to Sales
        </Button>
        <Button
          style={tryButtonStyles}
          type="fill"
          onClick={() => alert("Canary Design is awesome!")}
        >
          Try for Free
        </Button>
      </div>
    </header>
  );
};

export default Header;
