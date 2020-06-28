import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleTodo, deleteTodo} from './todoSlice';
import Todo from "./Todo";
import {setFilter} from "./visibilitySlice";

const TodoList = ({todos}) => {
    const dispatch = useDispatch();

    const handleToggle = (todoId) => {
        dispatch(toggleTodo(todoId));
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    }
    if (todos.length > 0) {
        return (
            <>
                <h1 className={'title'}>Todo List</h1>
                <ul className={"todo__list"}>
                    {todos.map(todo => <Todo
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        text={todo.text}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />)}
                </ul>
                <button onClick={() => dispatch(setFilter('SHOW_ALL'))}>SHOW ALL</button>
                <button onClick={() => dispatch(setFilter('SHOW_ACTIVE'))}>SHOW ACTIVE</button>
                <button onClick={() => dispatch(setFilter('SHOW_COMPLETED'))}>SHOW COMPLETED</button>
            </>
        )
    } else {
        return (
            <>
            <h1 className={'title'}>Задач нет</h1>
                <button onClick={() => dispatch(setFilter('SHOW_ALL'))}>SHOW ALL</button>
                <button onClick={() => dispatch(setFilter('SHOW_ACTIVE'))}>SHOW ACTIVE</button>
                <button onClick={() => dispatch(setFilter('SHOW_COMPLETED'))}>SHOW COMPLETED</button>
                </>
        )
    }

};

export default TodoList;
