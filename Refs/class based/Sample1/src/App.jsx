import React, { Component, createRef } from 'react'


export default class App extends Component {

  constructor(){
    super()
    this.state={name : "Aditya"}
    this.h1Ref = createRef()
  }

  componentDidMount(){
    let h1=document.querySelector("h1")
    console.log(h1, "DOM WAY");
    console.log(this.h1Ref.current, "REACT WAY");
    this.h1Ref.current.style.color="blue"
  }
  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>
          {this.state.name}
        </h1>
      </div>
    )
  }
}
