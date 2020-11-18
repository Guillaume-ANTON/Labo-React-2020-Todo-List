import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

const TodoList = () => {
  const [message, setMessage] = useState('');
  const [todos] = useContext(TodoContext);

  useEffect(() => {
    if (todos.length) {
      setMessage('NEW MESSAGE !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [todos]);

  return (
    <div>
      <p>{ message }</p>

      <ul>
        { todos.map((todo) => <li>{ todo }</li>) }
      </ul>
    </div>
  );
};

export default TodoList;
