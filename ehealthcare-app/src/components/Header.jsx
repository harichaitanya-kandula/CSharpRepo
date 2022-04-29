import React, { Component } from 'react';
import  { Link }from "react-router-dom";

class Header extends Component {
   
                         
       
    render() { 
        let path = "";
        console.log(this.props.usertype);
        (this.props.usertype==="Admin")? path = "/AdminLogin" : path = "/UserLogin";
        return (

            <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
            <h1>EHealthCare</h1>
            <div style={{ float:'right' }}>
            <Link to={path}>Logout</Link>
            </div>
            </div>
        );
    }


   
}
 
export default Header;