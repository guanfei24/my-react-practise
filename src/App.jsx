import { useEffect } from "react";
import TodoList from "./compounents/todoList";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_TODOS", payload: data });
      });
  }, []);
  return (
    <>
      <h1>Todo List with Redux</h1>

      <TodoList />
    </>
  );
}

export default App;
