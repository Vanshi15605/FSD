import React, { useState } from 'react'

const Image = () => {
    const[Row,setRow]=useState(410)
    const[Column,setColumn]=useState(256)
    const change=10;
    function incRow(){
        setRow(Row+change)
    }
    function decRow()
    {
        setColumn(Row-change)
    }

    function incCol()
    {
        setColumn(Column+change)
    }
    function decCol()
    {
        setColumn(Column-change)
    }

  return (
    <div style={{height:"600px", width:"600px"}}>
        <button onClick={incRow}>Row +</button> 
        <button onClick={decRow}>Row -</button>
        <br></br>
        <button onClick={incCol}>Column +</button> 
        <button onClick={decCol}>Column -</button>
        <br></br>
      <img src="https://th.bing.com/th/id/OIP.YC995F9YULkcQxV1WGkovwHaEo?w=316&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="hihi" style={{width:`${Row}px`,height:`${Column}px`}}/>
    </div>
  )
}

export default Image
