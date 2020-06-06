import redux from "redux";
const { combineReducers, createStore } = redux;

const calculatorReducer = (state = { value: 0 }, action) => {
  if (action.type === "ADD") {
    return { ...state, value: state.value + 1 };
  }
  return state;
};

const otherReducer = (state = { message: "hello world " }, action) => {
  if (action.type === "UPDATE") {
    return { ...state, message: action.message };
  }
  return state;
};

const reducer = combineReducers({
  addCalculator: calculatorReducer,
  messages: otherReducer,
});

console.log(reducer);

const store = createStore(reducer);

console.log("GET INITAL STATE");
console.log(store.getState());
console.log(
  "DO Dispatch",
  store.dispatch({ type: 'ADD' }),
  store.dispatch({ type: 'ADD' }),
  store.dispatch({ type: 'ADD' }),
  store.dispatch({ type: 'ADD' }),
  store.dispatch({ type: "UPDATE", message: "Super Disptach" })
);
console.log("GET STATE");
console.log(store.getState());
