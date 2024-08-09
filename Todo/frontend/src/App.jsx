import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then((response) => {
      response.json().then((res) => {
        setTodos(res.todos);
      });
    });
  }, []);

  return (
    <>
      <Todo />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
