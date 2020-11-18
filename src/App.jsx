import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoForm from './components/TodoForm';

const App = () => (
  <div className="App">
    <Title title="Ma super application" />

    <TodoForm />
  </div>
);

export default App;
