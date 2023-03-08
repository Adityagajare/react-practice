import React from "react";

const Nav=(props)=>{
    return(
        <>
        <h1>{props.string}</h1>
        <h1>{props.number}</h1>
        <h1>{props.boolean}</h1>
        <h1>{props.data}</h1>
        </>

    )
}
export default Nav;