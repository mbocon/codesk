import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import SignUpForm from './signupform';
import "./style.css";
import logo from '../codeskLogo.png';


class Register extends Component {
  render() {
      return ( 

        // Navigation header on top of the page
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand"></a>
            <form className="form-inline">
              <button type="button" class="btn btn-outline-primary">
                <Link to='/'> Home page</Link>
                  </button>

                      <button type="button" class="btn btn-outline-primary">
                        <Link to='/login'> Login page</Link>
                          </button>
                            </form>
                                </nav>
        
        
        
        
        {/* Signup box for user */}
        <div className="container">
              <SignUpForm />
                  </div>
                                  </div>





    )
  }           
}

export default Register;
