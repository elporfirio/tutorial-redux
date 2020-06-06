import redux from 'redux';
const { createStore } = redux;


const reducer = (state = { phrase: 'hello World'}, action) => {
  return state;
}
const store = createStore(reducer);

// compose combina las strings
console.log(store);
console.log(store.getState());
