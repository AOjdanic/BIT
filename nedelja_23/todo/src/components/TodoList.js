import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.todosItems &&
        props.todosItems.map((todo) => <TodoItem key={todo.id} data={todo} />)}
    </ul>
  );
};

export default TodoList;
