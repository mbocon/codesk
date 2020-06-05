import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

class SignUpForm extends Component {

    constructor () {
        super()
    
        this.state = {
          email: '',
          password: '',
          isLoggedIn: false
        }
    
        this.handleInput  = this.handleInput.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
      }

      componentDidMount () {
        if (localStorage.token) {
          this.setState({
            isLoggedIn: true
          })
        } else {
          this.setState({
            isLoggedIn: false
          })
        }
      }
  
    handleInput (e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    handleSignUp = (e) => {
      
    }

  render () {
    return (
      <div className="container">
        <h1 className="display-3">Register!</h1>
          
          <form>
            <div class="form-group row">
                <label 
                htmlFor='email'>EMAIL
                </label>
                <div class="col-sm-10">
                  <input 
                  type='email' 
                  className='form-control mx-sm-3' 
                  placeholder='Enter your Email' 
                  id="inputEmail3"
                  name='email' 
                  onChange={this.handleInput} />
              </div>
              </div>


              <div class="form-group-row">
                <label
                htmlFor='password'>PASSWORD
                </label>
                <div class="col-sm-10">
                <input 
                type='password' 
                className="form-control mx-sm-3" 
                aria-describedby="passwordHelpBlock"
                placeholder='Choose your Password' 
                name='password' 
                onChange={this.handleInput} />
                <small id="passwordHelpBlock" class="text-muted">
                  Must be 8-20 characters long.
                </small>
                </div>
                </div>
          <br />
            <Link to="/userhome">
            <span>
                <FontAwesomeIcon icon={faSignInAlt} />
              </span>
              <input 
              value='Submit' 
              type='submit' 
              className='btn btn-outline-success' onClick={this.handleSignUp} />
                </Link>
          </form>
      </div>
    )
  }
}

export default SignUpForm
