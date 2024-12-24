import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import NewTodo from "./NewTodo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
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
