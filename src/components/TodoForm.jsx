import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
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
