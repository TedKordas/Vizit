import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './pages/Login/login.js';
import Terms from './pages/Terms/termsConditions.js';
import Why from './pages/Why/why.js';
import About from './pages/About/about.js';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default(
    <Router>
        <div>
            <Route component={Login} exact path='/' />
            <Route component={Terms} path='/termsConditions' />
            <Route component={Why} path='/why' />
            <Route component={About} path='/about' />
        </div>
    </Router>
)