import React, { useReducer } from 'react'

const initialValue = {count:0};
const reducer =(state,action)=>{
    switch(action.type){
        case "Increment":{
            return {count:state.count+1};
        }
        case "Decrement":{
            return {count: state.count-1};
        }
        case "Reset":{
            return initialValue;
        }
        default:{
            return {count:state.count};
        }
    }
}
const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,initialValue);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>↻</button>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
    </div>
  )
}
export default UseReducer