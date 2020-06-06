import redux from "redux";
const { createStore } = redux;

const reducer = (state = { phrase: "hello World" }, action) => {
  if (action.type === "UPDATE_TYPE") {
    return { ...state, phrase: action.payload };
  }
  return state;
};
const store = createStore(reducer);


store.subscribe(() => console.log('Hubo cambios'));
// compose combina las strings
console.log(store);
console.log(
  "DO Dispatch",
  store.dispatch({ type: "UPDATE_TYPE", payload: "Super Disptach" })
);
console.log("GET STATE");
console.log(store.getState());
console.log(
  "DO Dispatch",
  store.dispatch({ type: "UPDATE_TYPE", payload: "Super Awesome" })
);
