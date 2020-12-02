import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { TodoContext } from '../contexts/TodoProvider';
import { ADD_TODO } from '../reducers/todoReducer';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <button type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default TodoForm;
