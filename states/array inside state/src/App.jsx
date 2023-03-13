import React , {Component} from "react";

class App extends Component{

  state={
    subject : "React JS",
    skills : ["HTML" , "CSS" , "JS"]
  }
  render()
  {
    return(
      <>
      <h1>{this.state.subject}</h1>
      <ol type="a">
        {this.state.skills.map((x)=>{
          return <li>{x}</li>
        })}
      </ol>
      </>
    )
  }
}
export default App;