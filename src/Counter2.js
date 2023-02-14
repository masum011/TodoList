import React from 'react';
import MainCounter from './MainCounter';
function Counter2() {
    const [counter,increment,decrement]=MainCounter(100)
  return (
    <div>
        <p>hello counter 2 here {counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter2