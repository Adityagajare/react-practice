import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {
  constructor(){
    super()
    this.state={
      username : "Aditya"
    }
  }
  componentDidMount(){
    let btn=document.querySelector('button')
    btn.addEventListener("click",()=>{
      this.setState({username : this.state.username="Aditya Gajare"})
    })
  }
  render() {
    return (
      <div className='mainBlock'>
        <h1>
          {this.state.username}
        </h1>
        <button className='btn'>
          Change
        </button>
      </div>
    )
  }
}
