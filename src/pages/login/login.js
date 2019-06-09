import React, { Component } from 'react';
import './login.css';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import header from '../../header/header.js';




class Login extends Component {


  render() {
    return (
      <div className="App">
        <header />
        <header className="App-header">
          <div class="main">
            <div class="signup-content">
              <form method="POST" id="signup-form" class="signup-form">
                <h2>Register</h2>
                <p class="desc">Please provide all information required</p>
                <div class="form-group">
                  <input type="text" class="form-input" name="name" id="name" placeholder="Full Name"></input>
                </div>
                <div class="form-group">
                  <input type="email" class="form-input" name="email" id="email" placeholder="Email"></input>
                </div>
                <div class="form-group">
                  <input type="text" class="form-imput" name="password" id="password" placeholder="Password"></input>
                </div>
                <div class="form-group">
                  <input type="text" class="form-input" name="confrim-password" id="confirm-password" placeholder="Confirm Password"></input>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}



export default Login;
