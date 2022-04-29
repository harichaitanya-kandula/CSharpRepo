import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import ShopMedicine from './ShopMedicine';
import EditProfile from './EditProfile';
import Funds from './Funds';
import Header from './Header';

class UserPortal extends Component {
   
    
    render() { 
        return (
          <div>
          <Header usertype='User'/> 
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           <Tab eventKey="ShopMedicine" title="ShopMedicine">
          <ShopMedicine funds={this.props.location.state.funds} userid={this.props.location.state.id}/>
           </Tab>
           <Tab eventKey="EditProfile" title="EditProfile">
          <EditProfile funds={this.props.location.state.funds} userid={this.props.location.state.id} />
           </Tab>
           <Tab eventKey="Funds" title="Funds">
          <Funds funds={this.props.location.state.funds} userid={this.props.location.state.id} />
           </Tab>
           </Tabs>
         </div>
        );
    }

   
}
 
export default UserPortal;
