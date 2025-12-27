import React from "react";
import styles from "./NavBar.module.css";
import BrandLogo from "../../assets/BrandLogo.png";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src={BrandLogo}
        alt="logo"
        className={styles.logo}
      />

      <input
        type="text"
        placeholder="Search a song"
        className={styles.search}
      />

      <button className={styles.feedbackBtn}>
        Give Feedback
      </button>
    </div>
  );
};

export default NavBar;
