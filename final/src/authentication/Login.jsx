import React, { useState } from 'react'
import style from "./_authentication.module.css"
import axiosInstance from '../services/Axiosinstance'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate=useNavigate()
    let [state, setState]=useState({
        userEmail: "",
        password : ""
    })
    let [show,setShow]=useState(false)
    let {userEmail, password}=state;
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            let payload={userEmail,password};
            console.log(payload);
            let {data}=await axiosInstance.post("/authenticate",payload)
            console.log(data);
            let token = data.token;
            let role = data.role
            console.log(token);
            if(token){
                window.localStorage.setItem("token",token)
                window.localStorage.setItem("role",role)
                toast.success(`${userEmail} logged in sucessfully`)
                navigate("/")
            }else{
                window.localStorage.removeItem("token",token)
                window.localStorage.removeItem("role",role)
            }
        }
        catch (error){
            toast.error(error.code)
        }
    }
    let showPassword=()=>{
        setShow(!show)
    }
  return (
    <div className={style.logincontainer}>
        <div className={style.login}>
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="userEmail">UserEmail</label>
            <input type="email" name='userEmail' value={userEmail} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type={show?"text":"password"} name='password' value={password} onChange={handleChange}/>
            <span onClick={showPassword}>{show? "hide" : "show"}</span>
            <button>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Login