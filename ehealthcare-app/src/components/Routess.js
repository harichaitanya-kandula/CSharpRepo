import React, { Component } from "react";
import {  Switch, Route, BrowserRouter } from "react-router-dom";
import AdminPortal from "./AdminPortal";
import UserPortal from "./UserPortal";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
import InValidUser from "./InValidUser";
//import UserRegistration from "./UserRegisration";
import Home1 from "./Home1";
import history from './history';



export default class Routess extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Home1} />
                    <Route path="/UserLogin" component={UserLogin} />
                    <Route path="/AdminLogin" component={AdminLogin} />
                    <Route path="/AdminPortal" component={AdminPortal} />
                    <Route path="/UserPortal" component={UserPortal} />
                    <Route path="/InValidUser" component={InValidUser} />
                </Switch>
            </BrowserRouter>
        )
    }
}