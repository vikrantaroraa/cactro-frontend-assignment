import React from "react";
import styles from "./index.module.css";
import Header from "src/components/Header";
import workspaceImage from "src/assets/images/workspace-image.png";
import googleLogo from "src/assets/images/google-G-logo.png";
import etsyLogo from "src/assets/images/logo-etsy-small.png";
import airbnbLogo from "src/assets/images/logo-airbnb-small.png";
import nasaLogo from "src/assets/images/logo-nasa-small.png";
import targetLogo from "src/assets/images/logo-target-small.png";
import nytLogo from "src/assets/images/logo-nyt-small.png";
import uberLogo from "src/assets/images/logo-uber-small.png";
import CookiesPopup from "src/components/CookiesPopup";
import CustomerSupport from "src/components/CustomerSupport";
import NotificationPopup from "src/components/NotificationPopup";

const partnerCompanies = [
  { name: "Airbnb", logo: airbnbLogo },
  { name: "NASA", logo: nasaLogo },
  { name: "Uber", logo: uberLogo },
  { name: "Target", logo: targetLogo },
  { name: "The New York Times", logo: nytLogo },
  { name: "Etsy", logo: etsyLogo },
];

const HomePage = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["intro-and-workspace"]}>
        <div className={styles["intro"]}>
          <div className={styles["info-primary"]}>
            Slack is where the future works
          </div>
          <div className={styles["info-secondary"]}>
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </div>
          <div className={styles["intro-buttons"]}>
            <button className={styles["try-for-free-button"]}>
              Try for Free
            </button>
            <div className={styles["sign-up-with-google"]} role="button">
              <div className={styles["google-logo-container"]}>
                <img
                  src={googleLogo}
                  alt="Google Logo"
                  className={styles["google-logo"]}
                />
              </div>
              Sign Up with Google
            </div>
          </div>
        </div>
        <div className={styles["workspace"]}>
          <div className={styles["workspace-image-container"]}>
            <img src={workspaceImage} alt="workspace" />
          </div>
        </div>
      </div>
      <div className={styles["partner-companies"]}>
        {partnerCompanies.map((company) => {
          return (
            <div key={company.name} className={styles["company-logo"]}>
              <img src={company.logo} alt={company.name} />
            </div>
          );
        })}
      </div>
      <div className={styles["video-and-cta-section"]}>
        <div className={styles["video"]}>
          <video
            id="my-player"
            className={styles["video-player"]}
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            data-setup="{}"
          >
            <source
              src="//vjs.zencdn.net/v/oceans.mp4"
              type="video/mp4"
            ></source>
            <source
              src="//vjs.zencdn.net/v/oceans.webm"
              type="video/webm"
            ></source>
            <source
              src="//vjs.zencdn.net/v/oceans.ogv"
              type="video/ogg"
            ></source>
            <p
            // class="vjs-no-js"
            >
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
              >
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
        <div className={styles["cta-section"]}>
          <div className={styles["cta-info-primary"]}>
            Now is your moment to build a better tomorrow
          </div>
          <div className={styles["cta-info-secondary"]}>
            We have seen what the future can be. Now its time to decide what it
            will be.
          </div>
          <button className={styles["watch-video-button"]}>WATCH VIDEO</button>
        </div>
        <CookiesPopup />
        <CustomerSupport />
        <NotificationPopup />
      </div>
    </div>
  );
};

export default HomePage;
