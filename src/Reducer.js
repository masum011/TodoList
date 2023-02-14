import {React,useReducer} from 'react'
const initionalstart=0;
const reducer=(initional,action)=>{
    switch(action){
        case "increment":
            return initional+1;
        case "deecrement":
            return initional -1;
        default:
            return initional;
            
    }
}
function Reducer() {
    const [counter,dispatch]=useReducer(reducer,initionalstart)
  return (
    <div>
        <p>hello reducer function</p>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch("increment")}>increment</button>
        <button onClick={()=>dispatch("deecrement")}>deecrement</button>
    </div>
  )
}

export default Reducer