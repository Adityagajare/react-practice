import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display : "flex" , justifyContent:"space-between" , alignItems : "center" , height:"75px" , backgroundColor:"blue"}}>
      <div >
        <h1>
        <Link to="/" style={{color:"red", textDecoration:"none",fontSize:"30px"}}>Ahhaaa!</Link>
        </h1>
      </div>
      <ol style={{display :"flex" , width:"400px" , justifyContent:"space-evenly", listStyle:"none"}}>
        <li>
          <Link to="/" style={{color:"white", textDecoration:"none",fontSize:"20px"}}>Home</Link>
        </li>
        <li>
          <Link to="/signup" style={{color:"white", textDecoration:"none",fontSize:"20px"}}>Signup</Link>
        </li>
        <li>
          <Link to="/login" style={{color:"white", textDecoration:"none",fontSize:"20px"}}>Login</Link>
        </li>
        <li>
          <Link to="/about" style={{color:"white", textDecoration:"none",fontSize:"20px"}}>About</Link>
        </li>
      </ol>
    </div>
  )
}

export default Nav