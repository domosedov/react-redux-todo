import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload);
            todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            const idx = state.findIndex(item => item.id === action.payload);
            if (idx >= 0) {
                state.splice(idx, 1);
            }
        },
        editTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload.id);
            todo.text = action.payload.text;
        }

    },
});

const {reducer: todoReducer, actions} = todoSlice;

export const { addTodo, toggleTodo, deleteTodo, editTodo } = actions;

export const selectTodos = state => state.todo;

export default todoReducer;
