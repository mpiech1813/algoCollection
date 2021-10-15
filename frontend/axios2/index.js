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
        const { pokemon } = this.state;
        const getPokemon = this;

        return (
            <div>
                <h1>Click the butto to show the list</h1>
                <button onClick={getPokemon}>Get the list</button>
                <ul>
                    {pokemon.map((ele, idx) => {
                        return <li>{ele}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
