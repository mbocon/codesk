import React, { Component } from "react";
import "./style.css";
import Home from '../Home';
import Other from '../Other';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return ( <div className="App">
        <Link to='/yes'>Go to yes</Link>
        <Home />
        <Other />
      </div>
    )
  }
}

export default App;
