import React, { Component } from 'react';
import axios from 'axios';
class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  
  }

  onInputchange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
    
    handleSubmit =()=>
    {
      const data = {
        "id": 0,
        "emailId": this.state.emailId,
        "password": this.state.password,
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "isAdmin": false,
        "amount":1000
      };

      axios.post('http://localhost:5000/api/UserAccounts1/signup', data)
      .then(response => {
        console.log("Id: ", response.data.id);
        }).catch(error => {
          console.error('Something went wrong!', error);
       });
      
    }
              
    
    render() { 
        return (
          <div>
          <h4>User SignUp:</h4>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="emailId" placeholder="emailId"  value={this.state.emailId}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="password" placeholder="password"  value={this.state.password}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="firstName" placeholder="firstName"  value={this.state.firstName}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="lastName" placeholder="lastName"  value={this.state.lastName}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >Submit</button>
           </div> 
          </div>
        );
    }

   
}
 
export default UserRegistration;