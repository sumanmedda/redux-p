import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store, action) => {
  if(action.type === 'INCREMENT') {
    store = {counter : store.counter + 1}
  }else if(action.type === 'DECREMENT') {
    store = {counter :  store.counter - 1}
  }else if(action.type === 'ADDITION') {
    store = {counter :  store.counter + Number(action.payload.number)}
  }else if(action.type === 'SUBTRACTION') {
    store = {counter :  store.counter - Number(action.payload.number)}
  }
  return store;
}

const store = createStore(reducer, INITIAL_VALUE)

export default store