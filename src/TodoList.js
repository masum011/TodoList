import {React,useState} from "react";
import './Todolist.scss';
function TodoList(){
    const [activity,setactivity]=useState("");
    const [listdata,setlistdat]=useState([])
    function addactivity(){
        
        setlistdat((listdata)=>{
        const updatedata=([...listdata,activity])
        setactivity("");
            return updatedata;

        })

    }
    function removeactivity(i){
            const updatedlistdata=listdata.filter((ele,id)=>{
                return i!==id;
            })
            setlistdat(updatedlistdata);
    }
    return(
        <div>
            <h1>Todo List from a branch for github from masum main  also i add a branch  </h1>
            <h1>this is main barnch  also add some a braanch tag </h1>
            <input type="text" placeholder="add activity"  value={activity} onChange={(e)=>setactivity(e.target.value)}/>
             <button onClick={addactivity}>add list</button>
             <p>Here is your list</p>
             {listdata!==[] && listdata.map((data,i)=>{
                return(
                    <>
                        <p key={i}>
                            <div> {i} : {data}</div>
                            <button onClick={()=>removeactivity(i)}>remove</button>
                        </p>
                    </>
                )
             })}
           
        </div>
    )
}
export {TodoList};