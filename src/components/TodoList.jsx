import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, switchTodoState } from '../actions/todoActions';
import { TodoContext } from '../contexts/TodoProvider';
import { REMOVE_TODO, SWITCH_TODO_STATE } from '../reducers/todoReducer';

const TodoList = () => {
  const [message, setMessage] = useState('');
  const { todos } = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length) {
      setMessage('TODO HAS CHANGED !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [todos]);

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleSwitchTodoState = (todoId) => {
    dispatch(switchTodoState(todoId));
  };

  return (
    <div>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id} style={{ color: todo.isComplete ? 'grey' : 'black' }}>
              <input type="checkbox" onChange={() => handleSwitchTodoState(todo.id)} />

              { todo.name }

              <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
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
