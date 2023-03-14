import React, { Component } from 'react'
import JSON from "./studentDetails.json"
import Studentdetails from './Studentdetails.jsx';
import "./global.css"

export default class App extends Component {

  constructor(){
    super()
    this.state={json : JSON}
  }
  render() {
    return (
      <div>
        <Studentdetails data={this.state.json} />
      </div>
    )
  }
}
