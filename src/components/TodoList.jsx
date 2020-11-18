import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';
import { REMOVE_TODO } from '../reducers/todoReducer';

const TodoList = () => {
  const [message, setMessage] = useState('');
  const [state, dispatch] = useContext(TodoContext);

  useEffect(() => {
    if (state.todos.length) {
      setMessage('TODO HAS CHANGED !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [state.todos]);

  const removeTodo = (todo) => {
    dispatch({
      type: REMOVE_TODO,
      payload: todo,
    });
  };

  return (
    <div>
      <p>{ message }</p>

      <ul>
        {
          state.todos.map((todo) => (
            <li>
              { todo }

              <button type="button" onClick={() => removeTodo(todo)}>
                REMOVE
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
