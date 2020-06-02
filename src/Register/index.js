import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Home';
import {Link} from 'react-router-dom';

class Register extends Component {
  render() {
      return ( <div className="App">
        <h1>Registration</h1>
      <Link to='/login'>Go to login page</Link>
        <form>
        <label htmlFor='email'>Email</label>
            <input type='email'  id='email' />
                <label htmlFor='password'>Password</label>
                <input type='password'  id='password' />
                    <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Register;
