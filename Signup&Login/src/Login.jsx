import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      password:'',
      error:''
    }
  }
  


  handleSubmit = (e) =>{
    e.preventDefault()
    let username = localStorage.getItem('username');
    let password1 = localStorage.getItem('password');
    console.log(username,password1);
        if ((username === this.state.name) && (password1 === this.state.password)) {
            this.setState({error: 'Successfully Logged In'});
        } else {
            this.setState({error: 'Invalid Username or Password'});
        }
  }
 
  render() {
    
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.handleSubmit}>
        <p className="error">
          {this.state.error}
        </p>
        <div>
        <label htmlFor="username">Username</label>
                <br />
                <input type="text" id='username' value={this.state.name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" id='password' value={this.state.password} onChange={(e)=>{
                    this.setState({password:e.target.value})
                 }} />
            </div>
        <button>Login</button>
      </form>
      </div>
    )
  }
}

export default Login;
