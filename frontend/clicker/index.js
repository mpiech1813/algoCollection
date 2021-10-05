import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clicker extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    onClick = () => {
        let counter = this.state.counter;
        counter++;
        this.setState({ counter });
    };

    render() {
        const { counter } = this.state;
        const { onClick } = this;

        return (
            <div>
                <h1>Number of clicks: {counter}</h1>
                <button onClick={() => onClick()}>Click Me!</button>
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Clicker />, app);
