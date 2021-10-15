import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = { pokemon: [] };
    }

    getPokemon = () => {
        try {
            const pokeList = (
                await axios.get('https://pokeapi.co/api/v2/pokemon')
            ).data;
            this.setState({ pokemon: pokeList });
        } catch (error) {
            next(error);
        }
    };

    render() {
        const getPokemon = this;

        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={getPokemon}>Get the list</button>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
