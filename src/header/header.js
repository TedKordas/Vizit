import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import './header.css';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import router from '../router';
import Vizit from '../pics/Vizit.jpeg';
import Login from '../pages/Login/login.js'
import termsConditions from '../pages/Terms/termsConditions.js';
import Why from '../pages/Why/why.js';
import About from '../pages/About/about.js';

class header extends Component  {
    render() {
        return (
            <div className="App">
                <img src={Vizit} height="200px;" width="200px;" className="logo" align="left" alt="Vizit"></img>
                    <BrowserRouter>
                    <div class="navBar">
                        <Link to='/'><a>Login</a></Link>
                        <Link to='/termsConditions'><a>Terms and conditions</a></Link>
                        <Link to='/why'><a>Why Vizit?</a></Link>
                        <Link to='/about'><a>About Ted</a></Link>
                    </div>
                    <div className="content">
                    <Route path="/" component={Login}/>
                        <Route path="/termsConditions" component={termsConditions}/>
                        <Route path="/why" component={Why}/>
                        <Route path="/about" component={About}/>
                    </div>
                    </BrowserRouter>
            </div>
        )
    }
}

export default header;