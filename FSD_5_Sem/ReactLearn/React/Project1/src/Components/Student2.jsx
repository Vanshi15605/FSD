import React from 'react'

const Student1 = (props) => {
  return (
    <center>
    <div style={{border:'2px solid pink',width:'300px', height: '300px'}}>
      
      <h1>
        Hastar JI
      </h1>

      <img src={props.img} alt="khiiii" height={'100px'} width={'100px'}></img>  
    
   
    <h3>{props.name}</h3>
    <h3>{props.address}</h3>
    </div>
    </center>
  )
}

export default Student1
