import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'


class AdminLogin extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          count:0
        };
       // this.onInputchange = this.onInputchange.bind(this);
       // this.handleSignIn = this.handleSignIn.bind(this);
      }
    
      onInputchange=(event)=> {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
         
   
    testapi=(userid,password)=>  {
   
        const url= "http://localhost:5000/api/UserAccounts1/signin/"+userid+"/"+password;
     
        let responseere =  axios.get(url).then((res) => {
                    console.log(res.data);
                    return res.data; 
             });
        return responseere;

    }

    handleSignIn1 =()=>
    {
      this.setState({ count: this.state.count + 1 });
        let apiresp = this.testapi(this.state.userId,this.state.password)
        apiresp.then(val => {  console.log(val.isValidUser);
            this.setState({
                isValidUser: val.isValidUser,
                isAdmin: val.isAdmin,
               
          });})
         
     
    }
       
    render() { 
        console.log(this.state.isValidUser);
        console.log(this.state.registration);
        console.log(this.state.count);
        let inv="";
        let redirect="/AdminLogin";
        if(this.state.isValidUser)
        {
          if(this.state.isAdmin)
          {
            redirect = "/AdminPortal";
          }
        }
        
        return (

            <div style={{ width: '500px', height: 'auto',  border: '2px solid rgba(0, 0, 0, 0.05)'}}>
            <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
            <h1>EHealthCare</h1>
            <h6>Admin Login</h6>
            </div>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="userId" placeholder="Enter userid"  value={this.state.userId}
              onChange={this.onInputchange}></input>
            </div>
            <div className="col-auto">
             <label id="inputPassword2" className="visually-hidden">Password</label>
             <input type="text" className="form-control" name="password" placeholder="Enter Password" value={this.state.password}
              onChange={this.onInputchange}></input>
            </div>
            <div className="btn-group">
             <button type="submit" onClick={this.handleSignIn1} className="btn btn-primary btn-sm mr-10 " >SignIn</button>
            </div>
            <Redirect to={{ pathname:redirect}}  />
            </div>
        );
    }

  
   
}
 
export default AdminLogin;