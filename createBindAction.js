import redux from "redux";
const { bindActionCreators, createStore } = redux;

const reducer = (state = { phrase: "hello World" }, action) => {
  if (action.type === "UPDATE_TYPE") {
    return { ...state, phrase: action.payload };
  }
  return state;
};

const store = createStore(reducer);

const createAddAction = (amount) => {
  return {
    type: 'ADD',
    payload: {
      amount,
    }
  }
};

store.dispatch(createAddAction(5));

const dispatchAdd = bindActionCreators(createAddAction, store.dispatch)

console.log(dispatchAdd);
