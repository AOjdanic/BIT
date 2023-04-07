import React from "react";
import styles from "./AboutPage.module.css";
function About() {
  return (
    <section>
      <div className={styles["about-wrap"]}>
        <h3>ABOUT</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, rem!
          Laboriosam sed, quia a modi saepe libero, commodi cumque placeat
          doloribus accusamus dolorum dolorem corrupti iure eius deleniti odio?
          Temporibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolorum quia obcaecati quaerat sed itaque a animi expedita sunt eum
          facere, harum eius, odio doloremque adipisci tempora excepturi enim,
          incidunt ratione.
        </p>
      </div>
      <div className={styles["about-wrap"]}>
        <h3>OUR STORY</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          quas delectus odio, perferendis eligendi nesciunt laboriosam
          asperiores! Perspiciatis minima, nesciunt tenetur doloribus ex nemo
          cupiditate, consequuntur recusandae dolor enim magnam?
        </p>
      </div>
    </section>
  );
}

export default About;
