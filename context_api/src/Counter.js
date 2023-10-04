import React from 'react';
import { useAppContext } from './AppContext';

function Counter() {
  const { count, increment, decrement } = useAppContext();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;