import React from 'react';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {useSelector} from "react-redux";
import {createSelector} from "@reduxjs/toolkit";
import {selectTodos} from "./todoSlice";
import {filters as visibilityFilter, selectVisibilityFilter} from "./visibilitySlice";

const TodoApp = () => {

    const filterTodos = createSelector(
        [selectTodos, selectVisibilityFilter],
        (todos, filter) => {
            switch (filter) {
                case visibilityFilter.SHOW_ALL:
                    return todos;
                case visibilityFilter.SHOW_ACTIVE:
                    return todos.filter(todo => !todo.completed);
                case visibilityFilter.SHOW_COMPLETED:
                    return todos.filter(todo => todo.completed);
                default:
                    throw new Error('No Filter!');
            }
        }
    );

    let todos = useSelector(state => filterTodos(state));

    return (
        <>
            <TodoList todos={todos}/>
            <TodoForm />
        </>
    )
}

export default TodoApp;
