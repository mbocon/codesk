import React, { Component } from 'react'

class SignUpForm extends Component {

    constructor () {
        super()
    
        this.state = {
          email: '',
          password: '',
          isLoggedIn: false
        }
    
        this.handleLogOut = this.handleLogOut.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleLogIn = this.handleLogIn.bind(this)
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

      handleLogOut () {

    }
  
    handleInput (e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    handleSignUp (e) {
  
    }
  
    handleLogIn (e) {
  
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
          <input value='Submit' type='submit' onClick={this.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm
