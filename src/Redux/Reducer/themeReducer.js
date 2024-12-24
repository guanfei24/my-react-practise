export default function themeReducer(state = "light", action) {
    const { type } = action;
    switch (type) {
        case "SET_THEME":
            return state === "light" ? "dark" : "light";
        default:
            return state;
    }
}