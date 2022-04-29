import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import AddMedicine from './AddMedicine';
import DeleteMedicine from './DeleteMedicine';
import UpdateMedicine from './UpdateMedicine';
import ViewUser from './ViewUser';
import Header from './Header';
import MedicineReport from './MedicineReport';

class AdminPortal extends Component {
     
    
    render() { 
        return (
          <div>
            <Header usertype="Admin"/>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           <Tab eventKey="AddMedicine" title="AddMedicine">
          <AddMedicine />
          </Tab>
           <Tab eventKey="UpdateMedicine" title="UpdateMedicine">
         <UpdateMedicine />  
         </Tab>
         <Tab eventKey="DeleteMedicine" title="DeleteMedicine" >
         <DeleteMedicine />
              </Tab>
            <Tab eventKey="ViewUserDetails" title="ViewUserDetails" >
         <ViewUser />
              </Tab>   
              <Tab eventKey="Reports" title="Reports" >
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
           <Tab eventKey="MedicineReport" title="MedicineReport">
           <MedicineReport />
          </Tab> </Tabs>
         
              </Tab>         </Tabs>
         </div>
        );
    }

   
}
 
export default AdminPortal;
