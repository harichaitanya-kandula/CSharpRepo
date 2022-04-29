import React, { Component } from 'react';
import  { Link }from "react-router-dom";
class Home1 extends Component {
  
    render() { 
       
        return (
           <div>
               <ul>
                   <Link to="/UserLogin"><li>UserLogin</li></Link>
                   <Link to="/AdminLogin"><li>AdminLogin</li></Link>
               </ul>
            
                             
           </div> 
        );
    }
}
 
export default Home1;