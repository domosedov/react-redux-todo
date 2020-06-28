import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import todoReducer from '../components/todo/todoSlice';
import visibilityFilterReducer from "../components/todo/visibilitySlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    visibilityFilter: visibilityFilterReducer
  },
});
