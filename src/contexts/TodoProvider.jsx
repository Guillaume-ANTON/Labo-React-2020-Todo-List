import React, { useState } from 'react';

export const TodoContext = React.createContext([]);

const TodoProvider = (props) => {
  const { children } = props;
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      { children }
    </TodoContext.Provider>
  );
};

export default TodoProvider;
