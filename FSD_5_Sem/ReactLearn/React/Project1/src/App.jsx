import React from 'react'
import Student1 from './Components/Student1'
import Student2 from './Components/Student2'
import Student3 from './Components/Student3'

const App = () => {
  return (
    <div>
      <h1>ABES ENGINEERING COLLEGE</h1>
      <h1>MY STUDENT RECORDS</h1>
      <div style={{display:'flex' , margin:'30px', gap:'40px' }}>
        <Student1 name="CSE" address="Sunlight" img="https://th.bing.com/th/id/OIP.F8oEPQCyMnG46gGIaw0F4AHaEg?w=258&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
        <Student2 name="IT" address="Cave" img="https://th.bing.com/th/id/OIP.b61a8gPs6RPTrwg3GZ4dAgHaFj?w=230&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"/>
        <Student3 name="ELCE" address="Home" img="https://wallpaperaccess.com/full/16315163.jpg"/>
      
     import {BrowserRouter, Link, Routes, Route} from 'react-router'
     function home(){
      return <h1>this is home</h1>
     }
      function about(){
      return <h1>this is home</h1>
     }
      function phone(){
      return <h1>this is contact us page</h1>
     }
      </div>
    </div>
  )
}

export default App
