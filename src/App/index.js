import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../codeskLogo.png";
import heroImage from "../heroImage.jpeg";

class App extends Component {

  handleLogin = () => {

  }

  handleInput = () => {

  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <header className="container-fluid">
            <img src={logo} className="homePageLogo" alt="not found" />
          </header>

          <Link to="/Register" className="btn btn-outline-info">
            REGISTER
          </Link>

          <form className='main-login-form' onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                className="btn btn-outline-secondary"
                id="email"
                placeholder='email'
                onChange={this.handleInput}
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                className="btn btn-outline-secondary"
                id="password"
                placeholder='password'
                onChange={this.handleInput}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-outline-success"
            />
          </form>
        </nav>
        <h1 className="display-4">Welcome to Codesk</h1>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={heroImage} className="homePageHero" alt="not found" />
            </div>
            <div className="flip-card-back">
              <br></br>
              <br></br>
              <h4 className="display-4">Simplify your life!</h4>
              <p>
                Codesk allows you to organize, share, understand, and discuss
              </p>
              <p>any past, present or future code submitted once signed up!</p>
              <br></br>
              <p>
                Build and Learn with us <span role='img' aria-labelledby="jsx-a11y/accessible-emoji">❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
