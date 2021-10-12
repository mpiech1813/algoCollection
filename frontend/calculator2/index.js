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
                    <button value='1'>1</button>
                    <button value='2'>2</button>
                    <button value='3'>3</button>
                </div>
                <div>
                    <button value='4'>4</button>
                    <button value='5'>5</button>
                    <button value='6'>6</button>
                </div>
                <div>
                    <button value='7'>7</button>
                    <button value='8'>8</button>
                    <button value='9'>9</button>
                </div>
                <div>
                    <button value='0'></button>
                    <button value='equal'>=</button>
                    <button value='clear'>C</button>
                </div>
                <div>
                    <button value='+'>+</button>
                    <button value='-'>-</button>
                    <button value='*'>*</button>
                    <button value='/'>/</button>
                </div>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
