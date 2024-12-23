

export default function todoReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case "SET_TODOS":
            return payload;
        case "ADD_TODO":
            return [...state, payload];
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== payload);
        case "COMPLETE_TODO":
            return state.map((todo) =>
                todo.id === payload.id ? { ...todo, completed: payload.completed } : todo
            );
        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === payload.id ? { ...todo, title: payload.title } : todo
            );
        default:
            return state;
    }
}
