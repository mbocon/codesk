import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return ( <div className="App">
      <h1>Login Page</h1>
      <Link to='/'>Go to home page</Link>
      <Link to='/register'>Go to Register page</Link>
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

export default Login;
