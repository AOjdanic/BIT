import logo from "../logo.svg";
import styles from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <p className={styles.loadingText}>Loading...Please wait</p>
    </div>
  );
};

export default Spinner;
