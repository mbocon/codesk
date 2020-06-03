import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import logo from '../codeskLogo.png'



class Edit extends Component {
  render() 
  
  {
 mangbranch
    return ( 
      <div className="Edit">
        <navbar className="navbar">
          <img src={logo} alt="not found"/>
          <Link to='/'>Go to home</Link>
          <input value='LOGOUT' type='submit' id="logout"/>
        </navbar>
        <h1>EDIT CODE BLOCK</h1>
        
      <div className="input-group">
         <div className="input-group-prepend">
            <span className="input-group-text">Code Description</span>
        </div>
        <textarea clasNames="form-control" aria-label="Code Description"></textarea>
        <input type='submit' id="submit"/>
        </div>
            
          
      </div>
    


    )
  }
}

export default Edit;
