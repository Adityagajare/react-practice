import React from "react";
import JSON from "./actorsDetails.json";
import Actors from './Actors';
import "./global.css"


const App = ()=>{
    return(
        <div>
            <center><h1 className="heading">Actros Details</h1></center>
            <Actors data={JSON}/>
        </div>
    )
}
export default App;