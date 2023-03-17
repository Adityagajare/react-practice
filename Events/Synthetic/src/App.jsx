import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {

  constructor(){
    super()
    this.state={username : ""}
  }

  render() {
    return (
      <div className='mainBlock'>
        <h2>
          Input values
        </h2>
        <h1>
          {this.state.username}
        </h1>
        <input type="text" onChange={(e)=>{
          this.setState({username : e.target.value})
        }}/>
      </div>
    )
  }
}