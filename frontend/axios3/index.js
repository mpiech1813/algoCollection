import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import entireList from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = { pokeList: [] };

        this.getList = this.getList.bind(this);
    }

    getList = () => {
        try {
            // const list = (await axios.get('https://pokeapi.co/api/v2/pokemon'))
            //     .data;
            const longList = entireList('https://pokeapi.co/api/v2/pokemon');
            // console.log('the long list is: ', longList);

            this.setState({ pokeList: longList });
            // console.log('the state is: ', this.state.pokeList);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { pokeList } = this.state;
        console.log('the state is', pokeList);

        return (
            <div>
                <h1>hello from the Component</h1>
                <button onClick={() => this.getList()}>Click Me!</button>
                <ul>
                    {pokeList.map((ele, idx) => {
                        <li key={idx}>hello</li>;
                    })}
                </ul>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
