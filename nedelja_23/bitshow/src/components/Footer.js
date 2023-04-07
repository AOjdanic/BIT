import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  const date = new Date();
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-content"]}>
        &copy; BIT {`${month} ${year}`}{" "}
      </p>
    </footer>
  );
}

export default Footer;
