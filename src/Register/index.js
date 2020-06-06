import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import SignUpForm from "./signupform";
import "./style.css";
import logo from "../codeskLogo.png";
import Footer from "../Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import Footer from '../Footer';

class Register extends Component {
  render() {
    return (
      
      // Navigation header on top of the page
      <div className="App">
          <nav className="navbar navbar-light bg-light register-nav">
            <Link to="/">
                <img src={logo} alt="not found" />
                  </Link>
          
          {/* Link to Home page */}
          <div className="register-right">
              <Link to="/" className="btn btn-outline-info">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
                  Home page
                    </Link>
                      </div>
                        </nav>


        {/* Sign Up form  */}
          <div className="register-container container container-fluid">
            <SignUpForm />
            {/* <div class="foot-container">
					<Footer /> */}
					{/* </div> */}
                </div>
                    </div>
        
    );
  }
}

        
export default Register;
