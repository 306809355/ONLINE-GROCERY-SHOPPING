import React from 'react';
import './Signup1.css';

function SignUp() {
  return (
    <div className='signup1'>
      <form>
        <h3 className='b'>SIGN UP</h3>
        <label>UserName</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Phone Number</label>
        <input type="tel" />

        <label>Enter Password</label>
        <input type="password" />

        <label>ReEnter Password</label>
        <input type="password" />

        <button>SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;
