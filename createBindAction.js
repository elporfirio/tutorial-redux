import redux from "redux";
const { bindActionCreators, createStore } = redux;

const reducer = (state = { phrase: "hello World", amount: 0 }, action) => {
  if (action.type === "UPDATE_TYPE") {
    return { ...state, phrase: action.payload };
  }
  if (action.type === "ADD") {
    return { ...state, amount: state.amount + action.payload.amount };
  }
  return state;
};

const store = createStore(reducer);

const createAddAction = (amount) => {
  return {
    type: "ADD",
    payload: {
      amount,
    },
  };
};

store.subscribe(() => console.log("Se ha movido algo"));

// esto se hace normalmente para hacer el dispatch de un action
store.dispatch(createAddAction(5));

// esto se utiliza cuando se tiene un componente que no quiere saber nada de redux
// asi que en realidad ni se utiliza
const dispatchAdd = bindActionCreators(createAddAction, store.dispatch);

console.log(dispatchAdd.toString());

// mas info aqui
dispatchAdd(10);

console.log("GET STATE");
console.log(store.getState());
