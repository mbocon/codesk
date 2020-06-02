import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Edit extends Component {
  render() 
  
  {
    return ( <div className="App">
        <Link to='/'>Go to home</Link>
        <h1>This is the Edit page</h1>
        <form>
        <label htmlFor='description'>Description</label>
                    <input type='text'  id='description' />
                    <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Edit;
