import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();
  const deleteById = () => {
    const res = dispatch({ type: "DELETE_TODO", payload: id });
  };
  const completeById = () => {
    dispatch({
      type: "COMPLETE_TODO",
      payload: { id: id, completed: !completed },
    });
  };
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const save = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id, title: newTitle, completed },
    });
    setEdit(false);
  };
  return (
    <div>
      <div>
        <h4>
          {edit ? (
            <input
              type="text"
              value={newTitle}
              onChange={(t) => setNewTitle(t.target.value)}
            />
          ) : (
            title
          )}
        </h4>
        <span>{completed ? "✓" : "×"}</span>
      </div>
      {edit ? (
        <button onClick={save}>Save</button>
      ) : (
        <button onClick={() => setEdit(true)}>Edit</button>
      )}

      <button onClick={deleteById}>Delete</button>
      <button onClick={completeById}>Complete</button>
    </div>
  );
}
