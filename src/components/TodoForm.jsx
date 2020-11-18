import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';
import { ADD_TODO } from '../reducers/todoReducer';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [state, dispatch] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: value,
    });

    setValue('');
  };

  return (
    <form onSubmit={addTodo}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <button type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default TodoForm;
