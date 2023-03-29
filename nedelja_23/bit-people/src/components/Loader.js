import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles["sk-cube-grid"]}>
      <div className={styles[("sk-cube", "sk-cube1")]}></div>
      <div className={styles[("sk-cube", "sk-cube2")]}></div>
      <div className={styles[("sk-cube", "sk-cube3")]}></div>
      <div className={styles[("sk-cube", "sk-cube4")]}></div>
      <div className={styles[("sk-cube", "sk-cube5")]}></div>
      <div className={styles[("sk-cube", "sk-cube6")]}></div>
      <div className={styles[("sk-cube", "sk-cube7")]}></div>
      <div className={styles[("sk-cube", "sk-cube8")]}></div>
      <div className={styles[("sk-cube", "sk-cube9")]}></div>
    </div>
  );
}
