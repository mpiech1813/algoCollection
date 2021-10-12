import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            display: '',
        };
    }

    render() {
        const display = this.state;

        return (
            <div>
                <h1>Display: {display}</h1>
                <div>
                    <button onClick={} value='1'>1</button>
                    <button onClick={} value='2'>2</button>
                    <button onClick={} value='3'>3</button>
                </div>
                <div>
                    <button onClick={} value='4'>4</button>
                    <button onClick={} value='5'>5</button>
                    <button onClick={} value='6'>6</button>
                </div>
                <div>
                    <button onClick={} value='7'>7</button>
                    <button onClick={} value='8'>8</button>
                    <button onClick={} value='9'>9</button>
                </div>
                <div>
                    <button onClick={} value='0'></button>
                    <button onClick={} value='equal'>=</button>
                    <button onClick={} value='clear'>C</button>
                </div>
                <div>
                    <button onClick={} value='+'>+</button>
                    <button onClick={} value='-'>-</button>
                    <button onClick={} value='*'>*</button>
                    <button onClick={} value='/'>/</button>
                </div>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
