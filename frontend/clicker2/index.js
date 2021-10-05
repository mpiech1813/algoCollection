import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hello from this container</h1>
            </div>
        );
    }
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
