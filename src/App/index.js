import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import Home from '../Home';
import Other from '../Other';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return ( <div className="App">
        <h1>BOOTSTRAP STYLE</h1>
        <button className='btn btn-primary'>BOOTSTRAP BUTTON</button>
        <Link to='/login'>Go to login page</Link>
        <Home />
        <Other />
      </div>
    )
  }
}

export default App;
