import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);