import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {

  constructor(){
    super()
    this.state={
      userName : "Aditya",
      count : 0
    }
  }
  handleChange=()=>{
    this.setState({userName : "Aditya Gajare"})
  }
  handleNumberChange=()=>{
    this.setState({count : 1})
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.userName}
        </h1>
        <h2>
          {this.state.count}
        </h2>
        <button className="handleChange" onClick={this.handleChange}>
          Click to change
        </button>
        <button className="handleNumberChange" onClick={this.handleNumberChange}>
          Change the number
        </button>
      </div>
    )
  }
}

