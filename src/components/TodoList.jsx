import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

const TodoList = () => {
  const [message, setMessage] = useState('');
  const [state] = useContext(TodoContext);

  useEffect(() => {
    if (state.todos.length) {
      setMessage('NEW MESSAGE !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [state.todos]);

  return (
    <div>
      <p>{ message }</p>

      <ul>
        { state.todos.map((todo) => <li>{ todo }</li>) }
      </ul>
    </div>
  );
};

export default TodoList;
