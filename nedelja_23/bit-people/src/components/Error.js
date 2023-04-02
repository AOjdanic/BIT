import React from "react";
import styles from "./Error.module.css";
function Error() {
  return (
    <div className={styles.error}>
      <ion-icon name="sad-outline"></ion-icon>
      <h1>We couldn't find any people matching your search</h1>
    </div>
  );
}

export default Error;
