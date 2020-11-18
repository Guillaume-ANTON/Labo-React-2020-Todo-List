import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './contexts/TodoProvider';
import Counter from './components/Counter';

const App = () => (
  <div className="App">
    <Title title="Ma super application" />

    <TodoProvider>
      <TodoForm />
      <TodoList />
      <Counter />
    </TodoProvider>
  </div>
);

export default App;
