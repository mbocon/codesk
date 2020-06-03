import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import SignUpForm from "./signupform";
import "./style.css";
import logo from "../codeskLogo.png";

class Register extends Component {
  render() {
    return (
      // Navigation header on top of the page
      <div className="App">
        <nav className="navbar navbar-light bg-light register-nav">
          <Link to="/">
            <img src={logo} alt="not found" />
          </Link>
          <div className="register-right">
          <Link to="/" className="btn btn-outline-info">
            {" "}
            Home page
          </Link>
          <Link to="/login" className="btn btn-outline-info">
            {" "}
            Login page
          </Link>
          </div>
        </nav>
        <div className="register-container container container-fluid">
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default Register;
