import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <h1 className="title">PINOY FLEX</h1>
      <form className="signup-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Email or phone number"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Repeat Password"
            className="input-field"
          />
        </div>
        <button type="submit" className="signup-button">SIGN UP</button>
        <button type="button" className="signin-button">SIGN IN</button>
      </form>
    </div>
  );
}

export default Signup;
