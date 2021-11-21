import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import parse from 'csv-parse';
import path from 'path';

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

    onClick = () => {
        // const file = fs.readStream(path.join(__dirname, '/dummyData.csv'));
        console.log(path.join(__dirname, '/dummyData.csv'));
    };

    render() {
        const { pokemons } = this.state;
        return (
            <div>
                <h3>Hello I am working</h3>
                <button>parse</button>
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
