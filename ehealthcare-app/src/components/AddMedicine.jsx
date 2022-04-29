import React, { Component } from 'react';
import axios from 'axios';
class AddMedicine extends Component {
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
        "medicineId": 0,
        "medicineName": this.state.medicinename,
        "description": this.state.description,
        "ageLimit": this.state.ageLimit,
        "overTheCounter": false,
        "price":parseInt(this.state.price)
      };

      axios.post('http://localhost:5000/Admin/addMedicine', data)
      .then(response => {
        console.log("Id: ", response.data.medicineId);
        }).catch(error => {
          console.error('Something went wrong!', error);
       });
      
    }
              
    
    render() { 
        return (
          <div>
          <h4>AddMedicine</h4>
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
          <input type="text" className="form-control" name="overTheCounter" placeholder="overTheCounter"  value={this.state.overTheCounter}
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
 
export default AddMedicine;