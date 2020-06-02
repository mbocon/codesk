import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import {Link} from 'react-router-dom';
import logo from '../codeskLogo.png'

class App extends Component {
  render() {
    return ( <div className="App">
    <img src={logo} alt="not found"/>
        <h1>Welcome to Codesk</h1>
        <navbar>
          <Link to='/login'>Go to login page</Link>
          <Link to='/Register'>Go to Register page</Link>
        </navbar>
          <Link to='/Edit'>Go to Edit page</Link>
      </div>
    )
  }
}

export default App;
