import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            display: '',
        };
    }

    handleCalc = () => {
        const { display } = this.state;
        const calcResult = eval(display);
        this.setState({ display: calcResult });
    };

    handleClick = (e) => {
        const val = e.target.getAttribute('value');
        let { display } = this.state;

        switch (val) {
            case 'clear':
                display = '';
                this.setState({ display });
                break;
            case 'equal':
                this.handleCalc();
                break;
            default:
                display += val;
                this.setState({ display });
        }
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
