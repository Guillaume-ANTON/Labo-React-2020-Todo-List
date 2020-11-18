import React, { useEffect, useState } from 'react';

const TodoList = (props) => {
  const [message, setMessage] = useState('');
  const { list } = props;

  useEffect(() => {
    if (list.length) {
      setMessage('NEW MESSAGE !');
      setTimeout(() => setMessage(''), 2000);
    }
  }, [list]);

  return (
    <div>
      <p>{ message }</p>

      <ul>
        { list.map((todo) => <li>{ todo }</li>) }
      </ul>
    </div>
  );
};

export default TodoList;
