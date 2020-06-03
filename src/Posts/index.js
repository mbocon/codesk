import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import logo from "../codeskLogo.png";

class Posts extends Component {

    state = {
        text: '',
        posts: []
    }

    handleChange = (event) => {
        console.log([event.target.value], 'is the event trgt')
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
    }

  render() {
    return (
      <div className="Edit">
        <navbar className="navbar">
          <img src={logo} alt="not found" />
          <Link to="/">Go to home</Link>
          <input value="LOGOUT" type="submit" id="logout" />
        </navbar>
        <h1>CREATE POST</h1>

        <form onSubmit={this.handleSubmit} className='form-group' >
            <label htmlFor="post">POST : </label>
            <textarea className='form-control' value={this.state.text} id='text' type="text" onChange={this.handleChange} />
            <button className='btn btn-success create-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Posts;
