import React , {Component} from "react";

class App extends Component{

  state={username : "Aditya"}
  render()
  {
    return(
      <>
      <h1>{this.state.username}</h1>
      </>
    )
  }
}
export default App;