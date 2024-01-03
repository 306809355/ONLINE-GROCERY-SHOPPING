import React from 'react';
import './login.css'; 

import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-background">
      <div className="App">
        <center>
          <form>
            <br />
            <h3>LOGIN</h3>
            <input type="text" placeholder='ENTER USERNAME' required className='text-1'></input>
            <br />
            <br />
            <input type="password" placeholder='ENTER PASSWORD' required className='text-1'></input>
            <br />
            <br />
            <button>Login</button>
            <br />
            <br />
            <hr />
            <Link to='/signup'>  
              <p><b>Don't have an account? </b><b className="b">Sign up</b></p>
            </Link>
            <br />
          </form>
        </center>
      </div>
    </div>
  );
}

export default Login;
