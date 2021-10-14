import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { pokemons } = this.state;
        return (
            <div>
                <h3>Hello I am working</h3>
                {/* <ul>
                    {pokemons.map((ele, idx) => {
                        return <li key={idx}>{ele.name}</li>;
                    })}
                </ul> */}
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
