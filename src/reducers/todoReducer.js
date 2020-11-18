export const ADD_TODO = 'ADD_TODO';

export const initialTodoState = {
  todos: [],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};