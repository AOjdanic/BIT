import styles from "./Frame.module.css";

export default function Frame(props) {
  return <iframe className={styles.frame} src={props.url}></iframe>;
}
