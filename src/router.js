import React from 'react';
import Login from './pages/login/login';
import Terms from './pages/Terms/termsConditions';
import Why from './pages/Why/why';
import About from './pages/About/about';

import {HashRouter as Router, Route} from 'react-router-dom';

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