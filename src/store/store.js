import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import counterReducer from '../components/counter/counterSlice';
import todoReducer from '../components/todo/todoSlice';
import visibilityFilterReducer from "../components/todo/visibilitySlice";
import {loadState, saveState} from './localState';

const preloadedState = loadState();

 const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    visibilityFilter: visibilityFilterReducer
  },
  preloadedState
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

export default store;