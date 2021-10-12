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
                <h1>Hello from the component</h1>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
