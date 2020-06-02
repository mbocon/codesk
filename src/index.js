import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';
import App from "./App";
import Yes from './Yes';

const routes = [
    {
        path: '/yes',
        component: Yes,
        name: 'Yes-Page'
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
