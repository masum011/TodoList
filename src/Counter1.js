import React from 'react'
import MainCounter from './MainCounter'
function Counter1() {
    const[counter,increment,decrement]=MainCounter(10)
  return (
    <div>
        <p>here is counter  {counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter1