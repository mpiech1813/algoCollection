import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            display: '',
        };
    }

    handleClick = (e) => {
        const val = e.target.getAttribute('value');
        console.log(val);
    };

    render() {
        const { display } = this.state;
        const { handleClick } = this;

        return (
            <div>
                <h1>Display: {display}</h1>
                <div>
                    <button onClick={handleClick} value='1'>
                        1
                    </button>
                    <button onClick={handleClick} value='2'>
                        2
                    </button>
                    <button onClick={handleClick} value='3'>
                        3
                    </button>
                </div>
                <div>
                    <button onClick={handleClick} value='4'>
                        4
                    </button>
                    <button onClick={handleClick} value='5'>
                        5
                    </button>
                    <button onClick={handleClick} value='6'>
                        6
                    </button>
                </div>
                <div>
                    <button onClick={handleClick} value='7'>
                        7
                    </button>
                    <button onClick={handleClick} value='8'>
                        8
                    </button>
                    <button onClick={handleClick} value='9'>
                        9
                    </button>
                </div>
                <div>
                    <button onClick={handleClick} value='0'>
                        0
                    </button>
                    <button onClick={handleClick} value='equal'>
                        =
                    </button>
                    <button onClick={handleClick} value='clear'>
                        C
                    </button>
                </div>
                <div>
                    <button onClick={handleClick} value='+'>
                        +
                    </button>
                    <button onClick={handleClick} value='-'>
                        -
                    </button>
                    <button onClick={handleClick} value='*'>
                        *
                    </button>
                    <button onClick={handleClick} value='/'>
                        /
                    </button>
                </div>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
