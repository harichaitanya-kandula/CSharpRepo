import React, { Component } from 'react';
import axios from 'axios';
class UpdateMedicine extends Component {
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
      const data = {
        "medicineId": parseInt(this.state.medicineId),
        "medicineName": this.state.medicinename,
        "description": this.state.description,
        "ageLimit": this.state.ageLimit,
        "overTheCounter": false,
        "price": parseInt(this.state.price)

      };
      const url= "http://localhost:5000/Admin/updateMedicine/"+this.state.medicineId;
      axios.put(url, data)
      .then(response => {
        console.log("Id: ", response.data);
        }).catch(error => {
          console.error('Something went wrong!', error);
       });
      
    }
              
    
    render() { 
        return (
          <div>
          <h4>UpdateMedicine</h4>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="medicineId" placeholder="medicineId"  value={this.state.medicineId}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="medicinename" placeholder="medicinename"  value={this.state.medicinename}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="description" placeholder="description"  value={this.state.description}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="ageLimit" placeholder="ageLimit"  value={this.state.ageLimit}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-sm-10">
          <input type="text" className="form-control" name="price" placeholder="price"  value={this.state.price}
            onChange={this.onInputchange}></input>
          </div>
          <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >Submit</button>
           </div>
          </div>
        );
    }

   
}
 
export default UpdateMedicine;