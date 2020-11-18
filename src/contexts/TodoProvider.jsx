import React, { useReducer } from 'react';
import { initialTodoState, todoReducer } from '../reducers/todoReducer';

export const TodoContext = React.createContext([]);

const TodoProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      { children }
    </TodoContext.Provider>
  );
};

export default TodoProvider;
