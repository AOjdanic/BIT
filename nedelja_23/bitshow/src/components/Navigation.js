import React from "react";
import styles from "./Navigation.module.css";
import { useNavigate } from "react-router-dom";
function Navigation() {
  let navigate = useNavigate();
  const redirectHandler = () => {
    navigate("/");
  };

  const aboutHandler = () => {
    navigate("/about");
  };
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles["nav-container"]}`}>
        <h1 onClick={redirectHandler} className={styles["nav-title"]}>
          BIT Shows
        </h1>
        <h2 onClick={aboutHandler} className={styles["nav-about"]}>
          About
        </h2>
      </div>
    </nav>
  );
}

export default Navigation;
