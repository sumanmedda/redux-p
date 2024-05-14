import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
}

const reducer = (store, action) => {
  if(action.type === 'INCREMENT') {
    store = {counter : store.counter + 1, privacy : store.privacy}
  }else if(action.type === 'DECREMENT') {
    store = {counter :  store.counter - 1, privacy : store.privacy}
  }else if(action.type === 'ADDITION') {
    store = {counter :  store.counter + Number(action.payload.number), privacy : store.privacy}
  }else if(action.type === 'SUBTRACTION') {
    store = {counter :  store.counter - Number(action.payload.number), privacy : store.privacy}
  }else if(action.type === 'PRIVACY_MESSAGE') {
    store = {counter : store.counter, privacy :  !store.privacy}
  }
  return store;
}

const store = createStore(reducer, INITIAL_VALUE)

export default store