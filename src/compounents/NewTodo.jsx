import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    const newData = dispatch({
      type: "ADD_TODO",
      payload: { title: newTodo, completed: false },
    });
    console.log("newData: ", newData);
    setNewTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
