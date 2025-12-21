import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className={styles.logo}
      />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className={styles.search}
      />

      {/* Button */}
      <button className={styles.feedbackBtn}>
        Give Feedback
      </button>
    </nav>
  );
};

export default NavBar;
