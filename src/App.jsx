import { useEffect } from "react";
import TodoList from "./compounents/TodoList";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_TODOS", payload: data });
      });
  }, []);

  const setTheme = () => {
    dispatch({ type: "SET_THEME" });
  };

  return (
    <div className={theme === "light" ? "app--light" : "app--dark"}>
      <h1>Todo List with Redux</h1>
      <h3>Set Theme</h3>
      <button onClick={setTheme}>Set Theme</button>
      <h3>Remaining todos: {todos.length}</h3>
      <TodoList />
    </div>
  );
}

export default App;
