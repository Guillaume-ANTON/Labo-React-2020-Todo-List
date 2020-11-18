import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, value]);
    setValue('');
  };

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <button type="button" onClick={addTodo}>
        Ajouter
      </button>

      <TodoList list={todos} status={false} test="test" />
    </div>
  );
};

export default TodoForm;
