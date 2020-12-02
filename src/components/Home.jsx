import React from 'react';
import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Counter from './Counter';

const Home = () => (
  <div className="homepage">
    <TodoForm />
    <TodoList />
    <Counter />
  </div>
);

export default Home;
