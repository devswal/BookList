import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
        <form className='register-form'>
        <div className=''>
            <h1 id='register-title'>Register</h1>
          
  <div classname="form-group">

    <input id='register-input' type="email" classname="form-control"  aria-describedby="emailHelp" placeholder="Enter Username"/>
  </div>
  <div classname="form-group">
   
    <input id='register-input'  type="password" classname="form-control"  placeholder="Password"/>
  </div>
  <div classname="form-group">
    
    <input id='register-input'  type="password" classname="form-control"  placeholder=" Confirm Password"/>
  </div>
  <Link to = '/Booklist'>
  <button id='register-button' type="submit" classname="btn btn-primary">Register</button>
  </Link>
  
  </div>
</form>
    </div>
  )
}

export default Register