import React, { Component } from 'react';
import router from './router';


class App extends Component {
    render() {
        return (
            <div className="test">
                {router}
            </div>
        );
    }
}

export default App;