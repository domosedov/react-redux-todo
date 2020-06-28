import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        {id: 'asd', text: 'todo1', completed: false},
        {id: 'asdsaf', text: 'todo2', completed: true}
    ],
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
        }

    },
});

const {reducer: todoReducer, actions} = todoSlice;

export const { addTodo, toggleTodo, deleteTodo } = actions;

export const selectTodos = state => state.todo;

export default todoReducer;
