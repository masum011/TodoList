import {React,useReducer} from 'react'
const initionalValue=0;
const reducer=(init,action)=>{
    switch(action){
        case "increment":
            return init+2;
        case "decrement":
            return init-2;
        default:
            return init;
    }
}
function ReducerCounter() {
   const [twoXincre,dispatch] =useReducer(reducer,initionalValue);
  return (

    <div>
        <p>again testing usereducer hoohs {twoXincre} </p>
        <button onClick={()=>dispatch("increment")}>increment</button>
        <button onClick={()=>dispatch("decrement")}>decrement</button>
    </div>
  )
}

export default ReducerCounter