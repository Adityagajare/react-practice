import React from "react";
import {Component, createRef} from "react";

class App extends Component{

  constructor(){
    super()
    this.state={team : "RCB"}
    this.h1Ref = createRef()
    this.btnRef = createRef()
  }
    componentDidMount(){
      this.h1Ref.current.style.color="red"
      this.btnRef.current.style.height="40px"
      this.btnRef.current.style.width="300px"
      this.btnRef.current.style.fontSize="18px"
      this.btnRef.current.style.border="none"
      this.btnRef.current.style.backgroundColor="orange"
      this.btnRef.current.style.borderRadius="20px"
    }
  

  render(){
    return(
      <div>
        <h1 ref={this.h1Ref}>
          {this.state.team}
        </h1>
        <button ref={this.btnRef} onClick={()=>{
          this.setState({team : "Royal Challenger Bengaluru"})
          this.btnRef.current.style.color="blue"
          this.btnRef.current.style.backgroundColor="orange"
          this.h1Ref.current.style.color="red"
        }} >
          Change team Name
        </button>
      </div>
    )
  }
}
export default App;