import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span>&copy; 2023 Copyright BIT</span>
        <span>Last update: a day ago</span>
      </div>
    </footer>
  );
}
