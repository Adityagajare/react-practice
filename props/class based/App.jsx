import React from "react";
import { Component } from "react";
import Nav from './Nav';
import Picture from "./photo.jpg"

class App extends Component{
    render(){
        return(
            <>
            <Nav string="Aditya" number={1234} boolean={true} object={{username:"Adi",password:123}}/>
            <img src={Picture} alt="lion" height={300}/>
            <br />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D5KHbfBSKOUWIxbab-NkaMTLr-BRATHULo5MarIDHwPX8hGcEBzYDy0pYltd-HaEzvw&usqp=CAU" alt="tiger" />
            </>
        )
    }
}
export default App;