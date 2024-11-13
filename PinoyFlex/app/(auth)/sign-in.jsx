import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className="signin-container">
      <h1 className="title">Pinoy Flex</h1>
      <form className="signin-form">
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
        <div className="options">
          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="signin-button">SIGN IN</button>
        <button type="button" className="signup-button">SIGN UP</button>
      </form>
    </div>
  );
}

export default Signin;
