import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
