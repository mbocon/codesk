import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import {Link} from 'react-router-dom';
import logo from '../codeskLogo.png';
import heroImage from '../heroImage.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faUsers, faUserSecret, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faFacebook } from "@fortawesome/free-brands-svg-icons";


class App extends Component {
  

// updatePost = (post) => {
//   post.complete = !post.complete;
//   fetch('posts/' + post._id, {
//     body: JSON.stringify(post),
//     method: "PUT",
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     }
//   }).then(response => response.json()).then(data => {
//     // make another call to the server to get the current todos
//     this.getData()
//   })
// }





   render() {
    return (

        <div className="App">

            <header className="user-home-header">
              <div className="user-home-lft">
                <img src={logo} className="homePageLogo" alt="not found"/>
                  </div>
                    <div className="user-home-ctr">
                      <Link to='/Register' className="btn btn-outline-info user-home-create-btn"> <span> <FontAwesomeIcon icon={faRegistered}/> </span> REGISTER</Link>
                        </div>  
                          <div className="user-home-rgt">
                            <form class="form-inline my-2 my-lg-0"> 
                            <span> <FontAwesomeIcon icon={faUsers}/></span>
                              <input className="form-control mr-sm-2" placeholder="Email" type='email' name='email' onChange={this.handleInput} />
                              <span> <FontAwesomeIcon icon={faUserSecret}/></span>
                                <form class="form-inline my-2 my-lg-0">
                                  <input className="form-control mr-sm-2" placeholder="Password" type='password' name='password' onChange={this.handleInput} />
                                    <Link to='/login' type="submit" className="btn btn-outline-success" onclick={this.handle}> <span> <FontAwesomeIcon icon={faSignInAlt}/> </span> LOGIN </Link>
                                      </form>
                                        </form>
                                          </div>
                                            </header>


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
                              Build and Learn with us <span role='img' aria-labelledby="jsx-a11y/accessible-emoji">❤️</span>
                          </div>
                      </div>
                  </div>
              </div>
              )
            }
          }

export default App;
