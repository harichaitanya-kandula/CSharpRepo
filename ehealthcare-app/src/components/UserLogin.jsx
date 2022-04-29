import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import UserRegistration from './UserRegisration';


class UserLogin extends Component {
   
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
      // {this.state.isValidUser ? this.state.isAdmin ? <Redirect to="/AdminPortal" /> :<Redirect to="/UserPortal" />: } 
       //let history =  useHistory();
        let apiresp = this.testapi(this.state.userId,this.state.password)
        apiresp.then(val => {  console.log(val.isValidUser);
            this.setState({
                isValidUser: val.isValidUser,
                isAdmin: val.isAdmin,
                id:val.id,
                funds:val.amount
          });})
       
     
    }
           
    handleSignUp =()=>
    {
       // history.push('/UserRegistration');
       this.setState({
        registration: true });
      
    }

    refreshPage=()=> {
      window.location.reload(false);
    }
    
    
    render() { 
        console.log(this.state.isValidUser);
        console.log(this.state.registration);
        console.log(this.state.count);
        let inv="";
        let reg;
        if(this.state.registration)
        {reg =  <UserRegistration />; }
        let redirect="/UserLogin";
        if(this.state.isValidUser)
        {
          if(this.state.isAdmin)
          {
            redirect = "/AdminPortal";
          }
          else
          {
            redirect = "/UserPortal";
          }
        }
        if(!this.state.isValidUser && this.state.count>=1 && this.state.userId.length >0)
        {
         // inv = "InValid User Credentials !! Please reEnter!!";
         inv = this.InValidUser(this.state.isValidUser);
        }
        return (
           
            <div style={{ width: '500px', height: 'auto',  border: '2px solid rgba(0, 0, 0, 0.05)'}}>
            <div style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
            <h1>EHealthCare</h1>
            <h6>User Login</h6>
            </div>
            <div className="col-sm-10">
            <input type="text" className="form-control" name="userId" placeholder="userid"  value={this.state.userId}
              onChange={this.onInputchange}></input>
            </div>
            <div className="col-auto">
             <label id="inputPassword2" className="visually-hidden">Password</label>
             <input type="text" className="form-control" name="password" placeholder="Password" value={this.state.password}
              onChange={this.onInputchange}></input>
            </div>
            <div className="btn-group">
             <button type="submit" onClick={this.handleSignIn1} className="btn btn-primary btn-sm mr-10 " >SignIn</button>
             <button type="submit" onClick={this.handleSignUp} className="btn btn-primary btn-light" >New User SignUp!</button>
            </div>
            <span>{inv}</span>
            {reg}
            <Redirect to={{pathname: redirect,
                           state: { id: this.state.id, funds:this.state.funds }}} />
            </div>
        );
    }

     InValidUser=(valid)=> {
        let vall = "";
        if (valid) vall= "Valid"; else vall = "invalid";
        return <h6>User Credentials are {vall}!</h6>;
      }
      
      ValidAdmin=()=> {
        return <h1>You are Admin</h1>;
      }

   
}
 
export default UserLogin;