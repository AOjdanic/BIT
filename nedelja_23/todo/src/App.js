import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
function App() {
  const [todosItems, setTodosItems] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/todos`)
      .then((res) => res.json())
      .then((data) => {
        const { todos } = data;
        console.log(todos);
        setTodosItems(todos);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "white", textDecoration: "underline" }}>My Todos</h1>
      <TodoList todosItems={todosItems} />
    </div>
  );
}

export default App;
