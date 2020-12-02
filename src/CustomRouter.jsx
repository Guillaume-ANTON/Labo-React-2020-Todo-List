import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import TodoListAchieved from './components/TodoListAchieved';

const CustomRouter = ({ children }) => (
  <Router>
    {children}
    <Switch>
      <Route exact path="/todo-achieved">
        <TodoListAchieved />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default CustomRouter;
