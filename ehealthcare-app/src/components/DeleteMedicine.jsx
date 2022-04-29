import React, { Component } from 'react';
import axios from 'axios';
class DeleteMedicine extends Component {
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
      const url= "http://localhost:5000/Admin/deleteMedicine/"+this.state.medicineId;
     
      axios.delete(url)
      .then(response => {
        console.log("Id deleted: ", response.data.medicineId);
        }).catch(error => {
          console.error('Something went wrong!', error);
       });
      
    }
              
    
    render() { 
        return (
          <div>
          <h4>DeleteMedicine</h4>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="medicineId" placeholder="Enter Medicine Id"  value={this.state.medicineId}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >Delete</button>
           </div>
          </div>
        );
    }

   
}
 
export default DeleteMedicine;