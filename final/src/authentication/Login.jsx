import React, { useState } from 'react'
import style from "./_authentication.module.css"

const Login = () => {
    let [state, setState]=useState({
        name: "",
        password : ""
    })
    let [show,setShow]=useState(false)
    let {name, password}=state;
    let handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state);
    }
    let showPassword=()=>{
        setShow(!show)
    }
  return (
    <div className={style.logincontainer}>
        <div className={style.login}>
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor="name">Username</label>
            <input type="text" name='name' value={name} onChange={handleChange} />
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