import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import {Link} from 'react-router-dom';
import logo from '../codeskLogo.png';
import heroImage from '../heroImage.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class App extends Component {
  render() {
    return ( 

      // Navigation on top Page
        <div className="App">

            <header className="user-home-header">
              <div className="user-home-lft">
                <img src={logo} className="homePageLogo" alt="not found"/>
                  </div>
                    <div className="user-home-ctr">
                      <Link to='/Register' className="btn btn-outline-info user-home-create-btn">REGISTER</Link>
                        </div>
                          <div className="user-home-rgt">
                            <form class="form-inline my-2 my-lg-0">
                              <input className="form-control mr-sm-2" placeholder="Email" type='email' name='email' onChange={this.handleInput} />
                                <form class="form-inline my-2 my-lg-0">
                                  <input className="form-control mr-sm-2" placeholder="Password" type='password' name='password' onChange={this.handleInput} />
                                    <Link to='/login' type="submit" className="btn btn-outline-success" onclick={this.handle} >LOGIN </Link>
                                      </form>
                                        </form>
                                          </div>
                                            </header>
 

      {/* Title, Flip-Card Effect and Hero Image */}
        <h1 className="display-4">Welcome to Codesk</h1>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={heroImage} className="homePageHero" alt="not found"/>
                  </div>
                    <div className="flip-card-back">
                      <h4 className="display-4">Simplify your life!</h4>
                        <p>Codesk allows you to organize, share, understand, and discuss</p>
                          <p>any past, present or future code submitted once signed up!</p>
                            <br></br>
                              <p>Build and Learn with us <span> ❤️ </span> </p>
                          </div>
                      </div>
                  </div>
              </div>
              )
            }
          }

export default App;
