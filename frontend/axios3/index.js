import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import entireList from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = { pokeList: [] };
    }

    getList = async () => {
        try {
            // const list = (await axios.get('https://pokeapi.co/api/v2/pokemon'))
            //     .data;
            // console.log(list);
            const longList = entireList('https://pokeapi.co/api/v2/pokemon');

            // this.setState({ pokeList: longList });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { pokeList } = this.state;

        return (
            <div>
                <h1>hello from the Component</h1>
                <button onClick={() => this.getList()}>Click Me!</button>
                <ul>
                    {pokeList.map((ele, idx) => {
                        return <li key={idx}>{ele.name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
