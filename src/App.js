import React from 'react';
import './App.css';
import Vizit from './pics/Vizit.jpeg';

var randomWords = [
  'fucking degenerate',
  'dill weed',
  'terrible dancer',
  'graduate'
]

var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];


function App() {
  return (
    <div className="App">
    <img src={Vizit} height="200px;" width="200px;" class="logo" align="left"></img>
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

export default App;
