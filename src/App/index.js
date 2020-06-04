import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../codeskLogo.png";
import heroImage from "../heroImage.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faUsers, faUserSecret, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

class App extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
  };

  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    fetch("/users/login", {
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    }).then(
      this.setState({
        isLoggedIn: true,
      })
    );
  };

  render() {
    console.log(this.state.isLoggedIn, "is logged in");
    return (
      <div className='App'>
        <header className='user-home-header'>
          <div className='user-home-lft'>
            <img src={logo} className='homePageLogo' alt='not found' />
          </div>
          <div className='user-home-ctr'>
            <Link to='/Register' className='btn btn-outline-info user-home-create-btn'>
              <span>
                <FontAwesomeIcon icon={faRegistered} />
              </span>
              REGISTER
            </Link>
          </div>


        <div className="App">

            <header className="user-home-header">
              <div className="user-home-lft">
                <img src={logo} className="homePageLogo" alt="not found"/>
                  </div>
                    <div className="user-home-ctr">
                      <Link to='/Register' className="btn btn-outline-info user-home-create-btn"> <span> <FontAwesomeIcon icon={faRegistered}/> </span> REGISTER</Link>
                        </div>  
          <div className='user-home-rgt'>
            {this.state.isLoggedIn ? (
              <div>
                <h4>
                  Welcome <span>{this.state.email}</span>
                </h4>
                <NavLink to='/userhome'>Go to homepage</NavLink>
              </div>
            ) : (
              <form className='form-inline my-2 my-lg-0'>
                <span>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <input
                  className='form-control mr-sm-2'
                  placeholder='Email'
                  type='email'
                  name='email'
                  id='email'
                  onChange={this.handleInput}
                />
                <span>
                  <FontAwesomeIcon icon={faUserSecret} />
                </span>

                <input
                  className='form-control mr-sm-2'
                  placeholder='Password'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.handleInput}
                />

                <NavLink to='/userhome'>
                  <button type='submit' className='btn btn-outline-success' onClick={this.handleLogin}>
                    <span>
                      <FontAwesomeIcon icon={faSignInAlt} />
                    </span>
                    LOGIN
                  </button>
                </NavLink>
              </form>
            )}
          </div>
        </header>

        <h1 className='display-4'>Welcome to Codesk</h1>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <img src={heroImage} className='homePageHero' alt='not found' />
            </div>
            <div className='flip-card-back'>
              <h4 className='display-4'>Simplify your life!</h4>
              <p>Codesk allows you to organize, share, understand, and discuss</p>
              <p>any past, present or future code submitted once signed up!</p>
              <br></br>
              Build and Learn with us
              <span role='img' aria-labelledby='jsx-a11y/accessible-emoji'>
                ❤️
              </span>
             <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
