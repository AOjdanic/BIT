import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  return <li className={styles.item}>{props.data.todo}</li>;
};

export default TodoItem;
