import React, {memo, useState, useRef, useEffect} from 'react';
import {MdDelete, MdDone, MdModeEdit} from "react-icons/md";
import {useDispatch} from "react-redux";
import {editTodo} from "./todoSlice";

const Todo = ({text, id, completed, handleToggle, handleDelete}) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  let cn = 'todo__item';
  if (completed) {
    cn += ' todo__item--completed';
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const editTodoText = (e) => {
    e.preventDefault();
    setIsEditing(true);
  }
  
  const changeTodo = (e) => {
    e.preventDefault();
    dispatch(editTodo({id, text: todoText}));
    setIsEditing(false);
  }

  return (
    <li className={cn}>
      {
        isEditing
          ?
          <form
            className={'todo__edit'}
            onSubmit={changeTodo}>
            <textarea
              className={'todo__text--change'}
              value={todoText}
              onChange={e => setTodoText(e.target.value)}
              onBlur={changeTodo}
              ref={inputRef}
            />
          </form>
          :
          <p className={'todo__text'}>{text}</p>
      }

      <span className={'todo__actions'}>
        <button
          className={'todo__button todo__button--complete'}
          onClick={() => handleToggle(id)}
        ><MdDone/></button>
        <button
          className={'todo__button todo__button--edit'}
          onClick={editTodoText}
        ><MdModeEdit/></button>
        <button
          className={'todo__button todo__button--delete'}
          onClick={() => handleDelete(id)}
        ><MdDelete/></button>
            </span>
    </li>
  );
};

export default memo(Todo);
