import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { TodoContext } from '../contexts/TodoProvider';
import { getFact } from '../helpers/factHelpers';
import { ADD_TODO } from '../reducers/todoReducer';

const TodoForm = () => {
  const [value, setValue] = useState('');
  const [fact, setFact] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { todos } = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  useEffect(() => {
    getFact()
      .then((randomFact) => {
        setFact(randomFact);
        setIsLoading(false);
      });
  }, [todos]);

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <button type="submit">
        Ajouter
      </button>

      {!isLoading && fact ? (
        <div style={{ padding: 20 }}>
          Did you know :
          <p>{fact}</p>
        </div>
      ) : null}
    </form>
  );
};

export default TodoForm;
