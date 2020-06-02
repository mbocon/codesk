import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return ( <div className="App">
        <h1>Main Homepage</h1>
        <Link to='/login'>Go to login page</Link>
        <Link to='/Edit'>Go to Edit page</Link>
        <Link to='/Register'>Go to Register page</Link>

      </div>
    )
  }
}

export default App;
