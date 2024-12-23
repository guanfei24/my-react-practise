import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { id, title, completed } = todo;
  const dispatch = useDispatch();
  const deleteById = async () => {
    // delete API
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log("Deleted successfully");
        dispatch({ type: "DELETE_TODO", payload: id });
      } else {
        console.log("Deleted Error", res);
        return;
      }
    });
  };

  const completeById = () => {
    //complete API
    //update complete
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: !completed }),
    }).then((res) => {
      if (res.ok) {
        console.log("Update successfully");
        //update state
        dispatch({
          type: "COMPLETE_TODO",
          payload: { id: id, completed: !completed },
        });
      } else {
        console.log("Update Error", res);
        return;
      }
    });
  };
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const save = () => {
    //update API
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: newTitle,
        completed: completed,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log("Update successfully");
        dispatch({
          type: "EDIT_TODO",
          payload: { id, title: newTitle, completed },
        });
        setEdit(false);
      } else {
        console.log("Error", res);
      }
    });
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
