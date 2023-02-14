import {useState} from 'react'

function MainCounter( initio=0) {
    const [counter,setCounter]=useState(initio);
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }
    return [counter,increment,decrement];
}

export default MainCounter;