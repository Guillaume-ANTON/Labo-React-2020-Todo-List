import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, switchTodoState } from '../actions/todoActions';

const TodoListAchieved = () => {
  const { todos } = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

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
          todos.map((todo) => (todo.isComplete ? (
            <li key={todo.id} style={{ color: todo.isComplete ? 'grey' : 'black' }}>
              <input type="checkbox" onChange={() => handleSwitchTodoState(todo.id)} checked />

              { todo.name }

              <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
                REMOVE
              </button>
            </li>
          ) : null))
        }
      </ul>
    </div>
  );
};

export default TodoListAchieved;
