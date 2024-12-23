import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";
import NewTodo from "./NewTodo";

export default function TodoList() {
  const todos = useSelector((state) => state);
  return (
    <div>
      <h2>Todo List</h2>
      <NewTodo />
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
