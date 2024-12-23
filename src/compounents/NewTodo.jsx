import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function NewTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = async () => {
    //add api
    await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTodo, completed: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Add successfully: ", data);
        //update state
        dispatch({
          type: "ADD_TODO",
          payload: data,
        });
        //reset add input
        setNewTodo("");
      });
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
