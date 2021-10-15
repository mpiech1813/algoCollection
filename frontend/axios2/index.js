import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getPokemon = () => {};

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button>Get the list</button>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
