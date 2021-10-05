import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clicker extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    render() {
        const { counter } = this.state;

        return (
            <div>
                <h1>Hello from the Component</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Clicker />, app);
