import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import store from './store';

const App = () => (
  <div className="App">
    <Title title="Ma super application" />
    <Provider store={store}>
      <TodoForm />
      <TodoList />
      <Counter />
    </Provider>
  </div>
);

export default App;
