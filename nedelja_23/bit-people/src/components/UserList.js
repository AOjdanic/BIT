import styles from "./UserList.module.css";

export default function UserList(props) {
  return <ul className={styles.list}>{props.children}</ul>;
}
