import React, { Component } from 'react';
import axios from 'axios';


class ViewUser extends Component {
  constructor() {
    super();
    this.state = {
      success:false,
      user:{}
    };
  
  }

  onInputchange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
    
    handleSubmit =()=>{
      const url= "http://localhost:5000/api/UserAccounts1/getUser/"+this.state.userid1;
     axios
      .get(url)
      .then((response) => {
        const user = response.data;
        this.setState({ user: user });
        this.setState({ success: true });
        console.log(user);
      })
      .catch((err) => console.log(err));
  
  }
 
    
  render() {
  
            
  return (
      <div style={{  justifyContent:'center', alignItems:'center'}}>
         <div style={{width:'300px'}}>
         <input type="text" className="form-control" name="userid1" placeholder="userid1"  value={this.state.userid1}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >Submit</button>
           </div>
        {this.state.success?(  <div>
          <h6>EmailId:{this.state.user.emailId}</h6>
 <h6>First Name:{this.state.user.firstName}</h6>
 <h6>Last Name:{this.state.user.lastName}</h6>
 <h6>Funds:{this.state.user.amount}</h6>  </div> ):(<span>''</span>)}
      </div>)
  }
 
  
}
 
export default ViewUser;