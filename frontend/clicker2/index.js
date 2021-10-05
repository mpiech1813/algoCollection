import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    clickAction = () => {
        let counter = this.state.counter;
        counter++;
        this.setState({ counter });
    };

    render() {
        const { counter } = this.state;
        const { clickAction } = this;

        return (
            <div>
                <h1>Number of clicks: {counter}</h1>
                <button onClick={clickAction}>Click Me</button>
            </div>
        );
    }
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
