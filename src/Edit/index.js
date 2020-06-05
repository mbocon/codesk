import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import logo from '../codeskLogo.png'

class Edit extends Component {
 



      constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A code was submitted: ' + this.state.value);
        event.preventDefault();
      }
     render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="input-group-text">
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      
      

      <div className="Edit">
        <nav className="navbar">
          <img src={logo} alt="not found" />
          <Link to="/">Go to home</Link>
          <input value="LOGOUT" type="submit" id="logout" />
        </nav>
        <h1>EDIT CODE BLOCK</h1>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Code Description</span>
          </div>
          <textarea
            className="form-control"
            aria-label="Code Description"
          ></textarea>
          <input type="submit" value={this.state.submit} id="submit" />
        </div>
      </div>
</form>
       
    );
  }
}

export default Edit;
