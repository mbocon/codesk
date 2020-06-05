import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import logo from "../codeskLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact} from "@fortawesome/free-brands-svg-icons";
import { faCode, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";

class Posts extends Component {

    state = {
        text: '',
        posts: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/posts', {
            body: JSON.stringify({ text: this.state.text }),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              } 
        })
        .then(response => response.json())
        .then(newPost => {
            this.setState({
                posts: [newPost, ...this.state.posts],
                text: '',
            })
        })
        this.props.history.push("/userhome"); 
    }

  render() {
    return (
      <div className="App">
        <header className="user-home-header">
          <div className="user-home-lft">
            <Link to="/">
              <img src={logo} alt="not found" />
            </Link>
          </div>
          <div className="user-home-ctr">
        
            <Link to='/'>
            <button className="btn btn-outline-success user-home-create-btn">
            <span> <FontAwesomeIcon icon={faReact}/> </span>
              Go Home
            </button>
            </Link>
          </div>
          <div className="user-home-rgt">
            <h4 className="user-home-h4">Welcome user</h4>
            <button className="btn btn-outline-danger user-home-btn">  
            <span> <FontAwesomeIcon icon={faSignOutAlt}/> </span>
              LOGOUT
            </button>
          </div>
        </header>

        <h1 className="display-4">CREATE POST</h1>
        <form onSubmit={this.handleSubmit} className='form-group'>
            <label for="exampleFormControlTextarea1" htmlFor="post"><span> <FontAwesomeIcon icon={faCode}/> </span>POST : </label>
            <textarea className='form-control' value={this.state.text} id='text'  rows="14" col="10" type="textarea" onChange={this.handleChange} />
            <button className='btn btn-success create-btn'>Submit</button>
        </form>
          <Footer />
        </div>
    )
  }
}

export default Posts;
