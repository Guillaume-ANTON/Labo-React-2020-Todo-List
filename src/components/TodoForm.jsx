import React, { useState } from 'react';

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

      <ul>
        { todos.map((todo) => <li>{ todo }</li>) }
      </ul>
    </div>
  );
};

export default TodoForm;
