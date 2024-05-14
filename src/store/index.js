import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {
  if(action.type === 'INCREMENT') {
    store = {counter : store.counter + 1}
  }else if(action.type === 'DECREMENT') {
    store = {counter :  store.counter - 1}
  }
  return store;
}

const store = createStore(reducer)

export default store