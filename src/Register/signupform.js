import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
let endpoint;
if(process.env.NODE_ENV === 'development'){
    endpoint = 'http://localhost:8000/'
} else {
    endpoint = '/'
}

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
      console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  

    handleSignUp(e) {
      e.preventDefault()
      axios.post(`${endpoint}users/register`, {
          email: this.state.email,
          password: this.state.password
        })
          .then(response => {
              localStorage.token = response.data.token
              this.setState({
                  isLoggedIn: true,
                  email: '',
                  password:''
              })
          })
          .catch(err => console.log(err))
          window.location.href='/userhome'
  }

  render () {
    return (
      <div className="form-container">
        <h1 className="display-3">Register!</h1>
          
          <form className="catch-all">
            <div class="form-group row">
                <label 
                htmlFor='email'>EMAIL
                </label>
                <div class="col-sm-10">
                  <input 
                  type='email' 
                  className='form-control mx-sm-3' 
                  placeholder='Enter your Email' 
                  name='email' 
                  onChange={this.handleInput} />
              </div>
                <label
                htmlFor='password'>PASSWORD
                </label>
                <div class="col-sm-10">
                <input 
                type='password' 
                className="form-control mx-sm-3" 
                placeholder='Choose your Password'
                name='password' 
                onChange={this.handleInput} />
                </div>
                </div>
          <br />
            <Link to="/userhome">
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
