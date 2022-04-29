import React, { Component } from 'react';
import axios from 'axios';
import pill from './pill.png';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import Order from './Order';


class ShopMedicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: [],
      fillmedicines: [],
      cartitems: [],
      count: 0,
      cart: [],
      cartid:0,
      total:0
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

      const min = 1001;
      const max= 100000;
      const random = Math.floor(min + (Math.random()*(max-min)));
      this.setState({ cartid: random });
  }

  searchMedicine  = (medicine) => {
    console.log(medicine);
    if(medicine.length>0)
    {
      this.setState({ fillmedicines : this.state.medicines.filter(x=>x.medicineName === medicine)}); 
    }
    else
    {
      this.setState({ fillmedicines : this.state.medicines}); 
    }
    
  }

  addtoCart = (medicine) => {
    this.setState({
      count: this.state.count + 1,
      cart: this.state.cart.concat(medicine),
      total: this.state.total + medicine.price
    
    });
    console.log(this.state.cart);

    console.log(this.props.userid);
    const data = {
      "cartId": 0,
      "cartNumber": this.state.cartid,
      "userId": this.props.userid,
      "medicineId": medicine.medicineId
    };

    axios.post('http://localhost:5000/Cart/Add', data)
    .then(response => {
      console.log("Id: ", response.data.cartId);
      }).catch(error => {
        console.error('Something went wrong!', error);
     });
  };

  onInputchange=(event)=> {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
    
  handleViewCart =()=>
    {
        this.setState({
        displayCart: true });
      
    }
    
  render() {
    let reg;
    /*if(this.state.displayCart)*/
    reg =  <div>{this.state.cart.map((cart) => (<div key={cart.medicineId} id={cart}>
       <h6>{cart.medicineName}<span style={{float:'right'}}>${cart.price}</span></h6>
      
              </div>))} 
              <h6>Total<span style={{float:'right'}}>${this.state.total}</span></h6></div> 
            
  return (
      <div>
        
        <div style={{float:'right', width: '350px', height: 'auto',  border: '2px solid rgba(0, 0, 0, 0.05)'}}>
        <Accordion defaultActiveKey={['0']} alwaysOpen >
       <Accordion.Item eventKey="0">
      <Accordion.Header>Cart <Badge bg="primary">{this.state.count}</Badge></Accordion.Header>
    <Accordion.Body>
      {reg}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
      <Accordion.Header>Checkout <Badge bg="primary">{this.state.count}</Badge></Accordion.Header>
    <Accordion.Body>
      <h4>Funds Available: {this.props.funds}</h4>
      <h4>Cart Total: {this.state.total}</h4>
      <Order userid={this.props.userid} cfunds={this.props.funds} ctotal= {this.state.total} cartidnum={this.state.cartid} />
      </Accordion.Body>
  </Accordion.Item>
  </Accordion>
             
        </div>
        
        <div id="container" style={{border: '2px solid rgba(0, 0, 0, 0.05)' , padding: '10px', margin: '10px'}}>
          <div style={{width: '500px'}}>
        <input style={{ display:'inline'}} type="text" className="form-control" name="searchMedicine" placeholder="Search Medicine"  value={this.state.searchMedicine}
            onChange={this.onInputchange}></input>
            
              <button style={{ display:'inline'}} type="submit" onClick={() => this.searchMedicine(this.state.searchMedicine)}>
                 Search
                </button></div>
           {this.state.fillmedicines.length ? (

              this.state.fillmedicines.map((medicine) => (
              <span>
              <div style={{width: 360, height: 'auto',  border: '2px solid rgba(0, 0, 0, 0.05)' , padding: '10px', margin: '10px'}} alt="120x120" key={medicine.medicineId} id={medicine}>
                
                <div style={{width: 260, height: 'auto'}}>
                <Image className="rounded mb-0" fluid ={true} src={pill}  />
                </div>
                <h1>{medicine.medicineName}</h1>
                <h4>Price:${medicine.price}</h4>
                <button onClick={() => this.addtoCart(medicine)}>
                  Add To Cart
                </button>
                
              </div>
              </span>

            ))
          ) : (
            <div >
             { this.state.medicines.map((medicine) => (
              <span>
              <div style={{width: 360, height: 'auto',  border: '2px solid rgba(0, 0, 0, 0.05)' , padding: '10px', margin: '10px'}} alt="120x120" key={medicine.medicineId} id={medicine}>
                
                <div style={{width: 260, height: 'auto'}}>
                <Image className="rounded mb-0" fluid ={true} src={pill}  />
                </div>
                <h1>{medicine.medicineName}</h1>
                <h4>Price:${medicine.price}</h4>
                <button onClick={() => this.addtoCart(medicine)}>
                  Add To Cart
                </button>
                
              </div>
              </span>

            ))}
            </div>
          )}
        </div>
    
      </div> 
    ); 
  } 
}
 
export default ShopMedicine;