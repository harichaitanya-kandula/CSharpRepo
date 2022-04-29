import React, { Component } from 'react';
import axios from 'axios';

class Order extends Component {
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
      const min = 100001;
      const max= 400000;
      const random = Math.floor(min + (Math.random()*(max-min)));
      console.log(new Date().getFullYear()+"-0"+(new Date().getUTCMonth("MM")+1)+"-"+new Date().getDate()+"T20:45:43.374Z")
      const data = {
        "orderId": 0,
        "orderNumber": random,
        "cartId": this.props.cartidnum,
        "orderDate": new Date().getFullYear()+"-0"+new Date().getUTCMonth("MM")+"-"+new Date().getDate()+"T20:45:43.374Z"
      };
      axios.post('http://localhost:5000/Orders/PlaceOrder', data)
      .then(response => {
        console.log("Id: ", response.data.orderId);
        this.setState({ orderNumber: response.data.orderNumber });
        this.setState({ orderId: response.data.orderId });
        }).catch(error => {
          console.error('Something went wrong!', error);
       });

       const url= "http://localhost:5000/api/UserAccounts1/updateFunds/"+this.props.userid+"?amount="+(this.props.cfunds-this.props.ctotal);
       axios.put(url, data)
       .then(response => {
         console.log("Id: ", response);
         }).catch(error => {
           console.error('Something went wrong!', error);
        });
      
    }
              
    
    render() { 
      let current=this.props.cfunds-this.props.ctotal;
        return (

          <div>
           <div className="col-auto">
           <button type="submit" onClick={this.handleSubmit} className="btn btn-primary mb-3" >Place Order</button>
           {this.state.orderId >0 ? <h6>Order Placed Successfully..OrderNumber:{this.state.orderNumber} CurrentFunds:{current}</h6>:<span>''</span>}
           </div>
          </div>
        );
    }

   
}
 
export default Order;