import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import './login.css';
import { Link } from 'react-router-dom';
import Vizit from '../../pics/Vizit.jpeg';

const routes = [
  {
    path: "/",
    exact: true,
  },
  {
    path: "/termsConditions",
  },
  {
    path: "/about",
  },
  {
    path: "/why"
  }
];


class Login extends Component {

  

  render() {
    return (
      <div className="App">
      <img src={Vizit} height="200px;" width="200px;" class="logo" align="left" alt="Vizit"></img>
      
        <div class="navBar">
          <Link to='/'><a>Login</a></Link>
          <Link to='/termsConditions'><a>Terms and conditions</a></Link>
          <Link to='/why'><a>Why Vizit?</a></Link>
          <Link to='/about'><a>About Ted</a></Link>
        </div>
      

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
