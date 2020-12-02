import { generateTodoId } from '../helpers/todoHelper';
import { ADD_TODO, REMOVE_TODO, SWITCH_TODO_STATE } from '../reducers/todoReducer';

export const addTodo = (todoName) => (dispatch, getState) => {
  const existingTodos = getState().todoReducer.todos;

  dispatch({
    type: ADD_TODO,
    payload: [
      ...existingTodos,
      {
        id: generateTodoId(existingTodos),
        name: todoName,
        isComplete: false,
      },
    ],
  });
};

export const removeTodo = (todoId) => (dispatch, getState) => {
  const existingTodos = getState().todoReducer.todos;
  dispatch({
    type: REMOVE_TODO,
    payload: existingTodos.filter(todo => todo.id !== todoId),
  });
};

export const switchTodoState = (todoId) => (dispatch, getState) => {
  const existingTodos = getState().todoReducer.todos;
  dispatch({
    type: SWITCH_TODO_STATE,
    payload: existingTodos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }

      return todo;
    }),
  });
};
