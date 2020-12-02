import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import store from './store';
import CustomRouter from './CustomRouter';

const App = () => (
  <Provider store={store}>
    <CustomRouter>
      <div className="App-header">
        <Link to="/">
          Home
        </Link>
        <Link to="/todo-achieved">
          Todo terminées
        </Link>
      </div>
    </CustomRouter>
  </Provider>
);

export default App;
