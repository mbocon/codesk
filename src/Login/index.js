import React, { Component } from "react";

import Home from '../Home';
import Other from '../Other';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return ( <div className="App">
        <Link to='/'>Go to home</Link>
        <h1>This is the login page</h1>
        <Home />
        <Other />
      </div>
    )
  }
}

export default Login;
