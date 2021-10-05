import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
        };
    }

    handleClick = (e) => {
        const value = e.target.getAttribute('value');
        let { data } = this.state;

        data += value;
        this.setState({ data });
    };

    handleClear = () => {
        this.setState({ data: '' });
    };

    handleCheck = () => {
        const { data } = this.state;
        console.log(data);
    };

    render() {
        return (
            <div>
                <h3>Result: </h3>
                <div>
                    <button onClick={this.handleClick} value='1'>
                        1
                    </button>
                    <button onClick={this.handleClick} value='2'>
                        2
                    </button>
                    <button onClick={this.handleClick} value='3'>
                        3
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} value='4'>
                        4
                    </button>
                    <button onClick={this.handleClick} value='5'>
                        5
                    </button>
                    <button onClick={this.handleClick} value='6'>
                        6
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} value='7'>
                        7
                    </button>
                    <button onClick={this.handleClick} value='8'>
                        8
                    </button>
                    <button onClick={this.handleClick} value='9'>
                        9
                    </button>
                </div>
                <div>
                    <button onClick={this.handleClick} value='0'>
                        0
                    </button>
                    <button onClick={this.handleClick} value='-'>
                        -
                    </button>
                    <button onClick={this.handleClick} value='+'>
                        +
                    </button>
                    <button onClick={this.handleClick} value='*'>
                        *
                    </button>
                    <button onClick={this.handleClick} value='/'>
                        /
                    </button>
                </div>
                <div>
                    <button onClick={this.handleCheck} value='equal'>
                        =
                    </button>
                    <button onClick={this.handleClear} value='clear'>
                        C
                    </button>
                </div>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
