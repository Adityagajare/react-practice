import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import STYLE from "./signup.module.css"

const Signup = () => {
    let navigate=useNavigate()
    let [user , setUser] = useState("")
    let [pass, setPass] = useState("")

    let handleSubmit = (e)=>{
    e.preventDefault()
    console.log({user , pass});
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass)
    navigate("/login")
    }

  return (
    <div className={STYLE.container}>
        <h1>Signup page</h1>
      <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" className={STYLE.inputfield} onChange={(e)=>{
          setUser(e.target.value)
        }} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className={STYLE.inputfield} onChange={(e)=>{
          setPass(e.target.value)
        }}/>
        <br />
        <button >SUBMIT</button>
      </form>
    </div>
  )
}

export default Signup