import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';
import App from "./App";
import Edit from "./Edit"
import Login from './Login';
import Register from "./Register";
import Home from "./Home";

const routes = [
    {
        path: '/login',
        component: Login,
        name: 'Login-Page'
    },
    {
        path: '/edit',
        component: Edit,
        name: 'Edit-Page'
    },
    {
        path: '/register',
        component: Register,
        name: 'Register-Page'
    },
    {
        path: '/userhome',
        component: Home,
        name: "UserHome-Page"
    },
    {
        path: '/',
        component: App,
        name: 'Main-Page'
    }
]

const root = document.getElementById("root");
const hist = createBrowserHistory();

ReactDOM.render(<Router history={hist}>
        <Switch>
            {
                routes.map((route)=>{
                    return(
                        <Route path={route.path} component={route.component} key={route.name}></Route>
                    )
                })
            }
        </Switch>
    </Router>, root);
