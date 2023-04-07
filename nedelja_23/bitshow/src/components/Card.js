import React from "react";
import styles from "./Card.module.css";
function Card({ movie }) {
  return (
    <article
      className={
        movie.rating.average > 8.5
          ? `${styles.card} ${styles.popular}`
          : styles.card
      }
    >
      <div className={styles["img-wrap"]}>
        <img className={styles["card-img"]} src={movie.image.medium} alt="" />
      </div>
      <div className={styles["title-wrap"]}>
        <p className={styles.title}>{movie.name}</p>
      </div>
      <p className={styles.rating}>{movie.rating.average}</p>
    </article>
  );
}

export default Card;
