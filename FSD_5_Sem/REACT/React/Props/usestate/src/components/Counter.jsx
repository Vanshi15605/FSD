import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [Count,setCount]=useState(0);
    function inc(){
        setCount(Count+1)
    }
    function dec(){
        setCount(Count+2)
    }
  return (
    <div style={{border:'2px solid white', height:'400px'}}>
        <h2>Counter App</h2>

        <button onClick={inc}>ADD +</button>
        <br></br>
        <span>{Count}</span>
        <br></br>
        <button onClick={dec}>Subtract -</button>
    </div>
  )
}

export default Counter
