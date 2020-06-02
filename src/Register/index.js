import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import SignUpForm from './signupform';

class Register extends Component {
  render() {
      return ( <div className="App">
        <Link to='/'>Go to home page</Link>
        <Link to='/login'>Go to login page</Link>
        <SignUpForm />
      </div>
    )
  }           
}

export default Register;
