import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'


class MedicineReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      };
  
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Admin/GetAllMedicines")
      .then((response) => {
        const medicines = response.data;
        this.setState({ medicines });
        console.log(medicines);
      })
      .catch((err) => console.log(err));

     
  }
     
  render() {
    const contents = this.state.medicines.map(item => {
      // change the title and location key based on your API
      return <tr>
        <td>{item.MedicineId}</td> 
        <td>{item.MedicineName}</td>
        <td>{item.Description}</td>
        <td>{item.AgeLimit}</td>
        <td>{item.OverTheCounter}</td>
        <td>{item.Price}</td>
      </tr>
    })
            
  return (
    <div className="container">
    <div className="row">
       <div className="col-md-6 col-md-offset-5">
           <h1 className="title">All Medicines</h1>
           <Table striped bordered>
           <thead>
            <tr>
              <th>MedicineId  </th>
              <th>Medicine Name  </th> 
              <th>Description  </th> 
              <th>AgeLimit  </th> 
              <th>Price</th> 
            </tr>
            </thead>
            {this.state.medicines.length >0 &&(this.state.medicines.map(item => (
              <tbody>
             <tr>
              <td>{item.medicineId}</td> 
              <td>{item.medicineName}</td>
              <td>{item.description}</td>
              <td>{item.ageLimit}</td>
              <td>{item.price}</td>
               </tr></tbody>)))}
             
          </Table>
       </div>
    </div>
  </div>
             
    ); 
  } 
}
 
export default MedicineReport;