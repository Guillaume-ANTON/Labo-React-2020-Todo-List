import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { TodoContext } from '../contexts/TodoProvider';

const Counter = () => {
  const { todos } = useSelector(state => state.todoReducer);

  return (
    <div>
      {`Nombre de todos : ${todos.length}`}
    </div>
  );
};

export default Counter;
