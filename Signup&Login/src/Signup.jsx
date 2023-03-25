import React, { Component } from 'react'
import Login from './Login';


export default class Signup extends Component {
    constructor(){
        super()
        this.state = {
            name:'',
            password:''
          }
    }
    onSubmit=(e)=>{
        e.preventDefault()
          localStorage.setItem('username', this.state.name);
          localStorage.setItem('password', this.state.password);
}
  render() {
    return (
        <div className='container'>
        <h1>Signup page</h1>
       <form action="" onSubmit={this.onSubmit}>
            <div>
                <label htmlFor="user">Username</label>
                <br />
                <input type="text" id='user' value={this.state.name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }} />
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <br />
                <input type="password" id='pass' value={this.state.password} onChange={(e)=>{
                    this.setState({password:e.target.value})
                 }} />
            </div>
            <button onClick={this.props.onRegister}>Signup</button>
       </form>
       <a href="#Login.jsx">Login</a>
       <Login/>
      </div>
    )
  }
}
