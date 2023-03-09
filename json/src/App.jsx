import React from "react";
import JSON from "./actorsDetails.json";
import Actors from './Actors';
import "./global.css"


const App = ()=>{
    return(
        <div>
            <Actors data={JSON}/>
        </div>
    )
}
export default App;