import React from "react";
import Nav from './components/Nav';
import "./global.css"
import Hotstar from './components/Hotstar';
import Apple from './components/Apple';
import Mentor from './components/Mentor';
import Estate from './components/Estate';
const App = ()=>{
    return(
        <div>
        <Nav/>
        <br />
        <br />
        <Hotstar/>
        <br />
        <br />
        <Apple/>
        <br />
        <br />
        <Mentor/>
        <br />
        <br />
        <Estate/>
        </div>
    )
}
export default App;