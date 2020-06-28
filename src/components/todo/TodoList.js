import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTodo, deleteTodo} from './todoSlice';
import Todo from "./Todo";
import {setFilter, filters, selectVisibilityFilter} from "./visibilitySlice";
import FilterButton from "./FilterButton";

const TodoList = ({todos}) => {
    const dispatch = useDispatch();

    const handleToggle = (todoId) => {
        dispatch(toggleTodo(todoId));
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    const currentFilter = useSelector(selectVisibilityFilter);
    
    const buttons = [];
    
    for (let key in filters) {
      buttons.push(
        <FilterButton key={key} buttonText={filters[key]} clickHandler={() => dispatch(setFilter(filters[key]))} active={filters[key] === currentFilter} />
      )
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
                <div className={'todo__filters'}>
                  {buttons}
                </div>
            </>
        )
    } else {
        return (
            <>
              <h1 className={'title'}>Задач нет</h1>
              <div className={'todo__filters'}>
                {buttons}
              </div>
            </>
        )
    }

};

export default TodoList;
