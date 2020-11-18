import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

const Counter = () => {
  const [todos] = useContext(TodoContext);

  return (
    <div>
      {`Nombre de todos : ${todos.length}`}
    </div>
  );
};

export default Counter;
