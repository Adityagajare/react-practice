import React from "react";
import {Component} from "react";

class Nav extends Component{
    render(){
        return(
            <>
            <h1>{this.props.string}</h1>
            <h1>{this.props.number}</h1>
            <h1>{this.props.boolean}</h1>
            <h1>{this.props.object.username}</h1>
            <h1>{this.props.object.password}</h1>
            </>
        )
    }
}
export default Nav;