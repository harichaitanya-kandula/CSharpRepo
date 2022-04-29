import React, { Component } from 'react';
import  { Link }from "react-router-dom";
import  { Redirect } from 'react-router-dom';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            userm: false,
            adminm: false
        };
       // this.onInputchange = this.onInputchange.bind(this);
       // this.handleSignIn = this.handleSignIn.bind(this);
      }
    handleUserLogin =()=>
    {
        this.setState({ userm: true });
    }

    handleAdminLogin =()=>
    {
      this.setState({ adminm: true });
    }

    render() { 
        let redirect = " ";
        if(this.state.userm)
        {redirect = "/UserLogin"; }
        if(this.state.adminm)
        {
        redirect = "/AdminLogin";
        }
        return (
           <div>
               <ul>
                   <li><Link to="/UserLogin" onClick={this.handleUserLogin}>UserLogin</Link></li>
                   <li> <Link to="/AdminLogin" onClick={this.handleAdminLogin}>AdminLogin</Link></li>
               </ul>
               <Redirect to={redirect} />
                
                             
           </div> 
        );
    }
}
 
export default Home;