import React from "react";
import { increment,decrement,reset } from "./counterSlice";
import { useDispatch,useSelector } from "react-redux";

function Counter(){

  let data=  useSelector((state)=>{return state.counter.count})
 let dispatch= useDispatch()
    return(
        <div>
            <h1>count:{data}</h1>
            <button onClick={()=>{dispatch(increment())}}>increment</button>
            <button onClick={()=>{dispatch(decrement())}}>decrement</button>
            <button onClick={()=>{dispatch(reset())}}>reset</button>
        </div>
    )
}

export default Counter