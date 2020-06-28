import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {v4 as uuid} from 'uuid';
import {addTodo} from './todoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (todoText.trim()) {
            dispatch(addTodo({id: uuid(), text: todoText, completed: false}));
        }
        setTodoText('');
    }

    return (
        <form
            className={'todo__form'}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
                className={'todo__input'}
            />
            <button type="submit" className={"todo__button"}>Add Todo</button>
        </form>
    )

};

export default TodoForm;
