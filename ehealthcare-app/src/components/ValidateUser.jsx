import React, { Component } from 'react';
class ValidateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data: this.props.isValidUser
        };
       // this.onInputchange = this.onInputchange.bind(this);
       // this.handleSignIn = this.handleSignIn.bind(this);
      }
     render() { 
        const {data} = this.state;
        return (
             <div>
               <h1>sdfsfsfsdfdsf{data}</h1>
            </div>
        );
    }
}
 
export default ValidateUser;