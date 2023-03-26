import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import STYLE from "./login.module.css"


const Login = () => {
    let navigate=useNavigate()
    let [user1 , setUser1] = useState("")
    let [pass1, setPass1] = useState("")
    let [err, setErr]=useState("")

    let handleSubmit = (e) =>{
        e.preventDefault()
        let username = localStorage.getItem('username');
        let password1 = localStorage.getItem('password');
        console.log(username,password1);
        if(username==user1 && password1==pass1){
            navigate("/")
        }
        else{
            setErr("Invalid username and password")
        }
      }
  return (
    <div className={STYLE.container}>
         <h1>Login Page</h1>
      <form action=""  onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" className={STYLE.inputfield} onChange={(e)=>{
          setUser1(e.target.value)
        }} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" className={STYLE.inputfield} onChange={(e)=>{
          setPass1(e.target.value)
        }}/>
        <br />
        <button >SUBMIT</button>
      </form>
      <p>{err}</p>
    </div>
  )
}

export default Login