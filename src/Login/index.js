import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return ( <div className="App">
      <h1>Login Page</h1>
         <form>
        <label htmlFor='email'>Email</label>
            <input type='email'  id='email' />
                <label htmlFor='password'>Password</label>
                <input type='password'  id='password' />
                    <input type='submit' />
                    
        </form>
        <Link to='/Register'>Go to Register page</Link>
      </div>
    )
  }
}

export default Login;
