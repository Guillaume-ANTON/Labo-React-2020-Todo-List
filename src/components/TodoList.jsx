import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contexts/TodoProvider';
import { REMOVE_TODO, SWITCH_TODO_STATE } from '../reducers/todoReducer';

const TodoList = () => {
  const [message, setMessage] = useState('');
  const [state, dispatch] = useContext(TodoContext);

  useEffect(() => {
    if (state.todos.length) {
      setMessage('TODO HAS CHANGED !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [state.todos]);

  const removeTodo = (todoId) => {
    dispatch({
      type: REMOVE_TODO,
      payload: todoId,
    });
  };

  const switchTodoState = (todoId) => {
    dispatch({
      type: SWITCH_TODO_STATE,
      payload: todoId,
    });
  };

  return (
    <div>
      <ul>
        {
          state.todos.map((todo) => (
            <li key={todo.id} style={{ color: todo.isComplete ? 'grey' : 'black' }}>
              <input type="checkbox" onChange={() => switchTodoState(todo.id)} />

              { todo.name }

              <button type="button" onClick={() => removeTodo(todo.id)}>
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
