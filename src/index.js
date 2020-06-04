import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';
import App from "./App";
import Edit from "./Edit";
import Register from "./Register";
import Home from "./Home";
import Posts from "./Posts";

const routes = [
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
        path: '/posts',
        component: Posts,
        name: "Posts-page"
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
