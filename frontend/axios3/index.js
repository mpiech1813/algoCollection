import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import entireList from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = { pokeList: [] };
    }

    getList = () => {
        try {
            // const list = (await axios.get('https://pokeapi.co/api/v2/pokemon'))
            //     .data;
            const longList = entireList('https://pokeapi.co/api/v2/pokemon');
            console.log('the long list is: ', longList);

            // this.setState({ pokeList: longList });
            // console.log('the state is: ', this.state.pokeList);
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
                        console.log(ele);
                        return <li key={idx}>{ele}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
