export const generateTodoId = (todos) => (
  todos.reduce((acc, todo) => (
    todo.id >= acc ? todo.id + 1 : acc
  ), 0)
);
