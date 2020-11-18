import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoProvider';

const Counter = () => {
  const [state] = useContext(TodoContext);

  return (
    <div>
      {`Nombre de todos : ${state.todos.length}`}
    </div>
  );
};

export default Counter;
