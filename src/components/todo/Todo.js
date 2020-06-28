import React, {memo} from 'react';
import {MdDelete, MdDone} from "react-icons/md";

const Todo = ({text, id, completed, handleToggle, handleDelete}) => {
    let cn = 'todo__item';
    if (completed) {
        cn += ' todo__item--completed';
    }

    return (
        <li className={cn}>
            <p>{text}</p>
            <span className={'todo__actions'}>
                <button
                    className={'todo__button todo__button--complete'}
                    onClick={() => handleToggle(id)}
                ><MdDone /></button>
                <button
                    className={'todo__button todo__button--delete'}
                    onClick={() => handleDelete(id)}
                ><MdDelete /></button>
            </span>
        </li>
    );
};

export default memo(Todo);
