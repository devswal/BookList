import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
          <div className='login'>
        <form className='login-form'>
  <div classname="form-group">
    <label id='login-label' for="Inputusername">Username</label>
    <input id='login-input' type="email" classname="form-control"  aria-describedby="emailHelp" placeholder="Enter Username"/>
  </div>
  <div classname="form-group">
    <label id='login-label' for="InputPassword1">Password</label>
    <input id='login-input'  type="password" classname="form-control"  placeholder="Password"/>
  </div>
  <Link to = '/Booklist'>
  <button id='login-button' type="submit" classname="btn btn-primary">Login</button>
  </Link>
</form>
    </div>
    </div>
  )
}

export default Login