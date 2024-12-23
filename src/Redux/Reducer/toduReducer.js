

export default function todoReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case "SET_TODOS":
            return payload;
        case "ADD_TODO":
            fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }).then((res) => res.json()).then((data) => {
                return [...state, data];
            });
            return [...state, payload];
        case "DELETE_TODO":
            fetch(`http://localhost:3000/todos/${payload}`, {
                method: "DELETE",
            }).then((res) => {
                if (res.ok) {
                    console.log("Deleted successfully");
                } else {
                    console.log("Error", res);
                }
            });
            return state.filter((todo) => todo.id !== payload);
        case "COMPLETE_TODO":
            //update complete
            fetch(`http://localhost:3000/todos/${payload.id}`, {
                method: "PATCH",
                body: JSON.stringify({ completed: payload.completed }),
            }).then((res) => {
                if (res.ok) {
                    console.log("Update successfully");
                } else {
                    console.log("Error", res);
                }
            });

            return state.map((todo) =>
                todo.id === payload.id ? { ...todo, completed: payload.completed } : todo
            );
        case "EDIT_TODO":

            fetch(`http://localhost:3000/todos/${payload.id}`, {
                method: "PUT",
                body: JSON.stringify({ title: payload.title, completed: payload.completed }),
            }).then((res) => {
                if (res.ok) {
                    console.log("Update successfully");
                } else {
                    console.log("Error", res);
                }
            });

            return state.map((todo) =>
                todo.id === payload.id ? { ...todo, title: payload.title } : todo
            );
        default:
            return state;
    }
}
