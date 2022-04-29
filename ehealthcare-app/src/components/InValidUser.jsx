import React, { Component } from 'react';
//import UserLogin from './UserLogin';
import  { Link }from "react-router-dom"

class InValidUser extends Component {
     
    
    render() { 
        return (
          <div>
            <h1>invalid</h1>
                  <Link to="/UserLogin">UserLogin</Link>
         </div>
        );
    }

   
}
 
export default InValidUser;
