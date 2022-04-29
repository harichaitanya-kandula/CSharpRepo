import React, { Component } from 'react';
import axios from 'axios';
class Funds extends Component {
  constructor() {
    super();
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
      const url= "http://localhost:5000/api/UserAccounts1/updateFunds/"+this.props.userid+"?amount="+(this.state.newFunds);
      axios.put(url)
      .then(response => {
        console.log("Response: ", response);
        response.status===204?this.setState({ success: 204 }):this.setState({ success: 500 });
        }).catch(error => {
          console.error('Something went wrong!', error);
       });
      
    }
              
    
    render() { 
        return (
          <div>
          <h4>Funds Available: {this.props.funds}</h4>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="AccountNumber" placeholder="AccountNumber"  value={this.state.AccountNumber}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="newFunds" placeholder="Enter Amount"  value={this.state.newFunds}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >UpdateFunds</button>
           </div> 
           {this.state.success ===204 ? <h6>Funds Updated Successfully..CurrentFunds:{this.state.newFunds}</h6>:<span>''</span>}
          </div>
        );
    }

   
}
 
export default Funds;