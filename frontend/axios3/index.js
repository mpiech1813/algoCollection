import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>hello from the Component</h1>
                <button>Click Me!</button>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
