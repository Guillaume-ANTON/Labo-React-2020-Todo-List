import { generateTodoId } from '../helpers/todoHelper';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SWITCH_TODO_STATE = 'SWITCH_TODO_STATE';

export const initialTodoState = {
  todos: [
    {
      id: generateTodoId([]),
      name: 'Todo par défaut',
      isComplete: false,
    },
  ],
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case SWITCH_TODO_STATE:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
