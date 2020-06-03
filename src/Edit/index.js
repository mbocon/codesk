import React, { Component } from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import logo from '../codeskLogo.png'



class Edit extends Component {
  render() 
  
  {
    return ( 
      <div className="Edit">
        <navbar className="navbar">
          <img src={logo} alt="not found"/>
          <Link to='/'>Go to home</Link>
          <input value='LOGOUT' type='submit' id="logout"/>
        </navbar>
        <h1>EDIT CODE BLOCK</h1>
        {/* <form>
            <label htmlFor='description'>Code Description</label>
            <input type='text'  id='description' />
            <input type='submit' id="submit"/>
        </form> */}
      <div className="input-group">
         <div className="input-group-prepend">
            <span className="input-group-text">Code Description</span>
        </div>
        <textarea clasNames="form-control" aria-label="Code Description"></textarea>
        <input type='submit' id="submit"/>
        </div>
            
          
      </div>




        

    // <div className="Select-code">
    //     <h2>SELECT CATEGORY</h2>
    //       <form>
    //         JavaScript <input type="checkbox" name="java" />   <br />
    //         JQuery     <input type="checkbox" name="JQuery" /> <br />
    //         HTML       <input type="checkbox" name="HTML" />   <br />
    //         CSS        <input type="checkbox" name="CSS" />    <br />
    //         Other      <input type="checkbox" name="OTHER" />  <br />
    //       </form>
    // </div>


    )
  }
}

export default Edit;
