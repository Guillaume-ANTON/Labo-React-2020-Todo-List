import { generateTodoId } from '../helpers/todoHelper';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SWITCH_TODO_STATE = 'SWITCH_TODO_STATE';

export const initialTodoState = {
  isLoaded: false,
  todos: [
    {
      id: generateTodoId([]),
      name: 'Todo par défaut',
      isComplete: false,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: generateTodoId(state.todos),
            name: action.payload,
            isComplete: false,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case SWITCH_TODO_STATE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isComplete: !todo.isComplete,
            };
          }

          return todo;
        }),
      };
    default:
      return state;
  }
};
