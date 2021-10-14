import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.state = { pokemons: [] };
    }

    async componentDidMount() {
        try {
            let { pokemons } = this.state;
            const pokemonList = (
                await axios.get('https://pokeapi.co/api/v2/pokemon')
            ).data;
            // console.log(pokemonList.results);
            pokemons = pokemonList.results;
            this.setState({ pokemons });
        } catch (error) {
            console.log('error occured in componentDidMount: ' + error);
        }
    }

    render() {
        const { pokemons } = this.state;
        return (
            <div>
                <h3>Hello I am working</h3>
                <ul>
                    {pokemons.map((ele, idx) => {
                        return <li key={idx}>{ele.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
