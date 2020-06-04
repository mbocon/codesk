import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
      axios.post('http://localhost:8000/users/register', {
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
  }


  render () {
    return (
      <div>
        <h3 className="display-3">Sign Up!</h3>
        <form>
          <br />
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' onChange={this.handleInput} />
          </div>
            <br/>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' onChange={this.handleInput} />
          </div>
          <br />
          <Link to="/userhome">
          <input value='Submit' type='submit' className='btn btn-outline-success' onClick={this.handleSignUp} />
          </Link>
        </form>
      </div>
    )
  }
}

export default SignUpForm
