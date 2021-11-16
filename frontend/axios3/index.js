import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import entireList from './utils';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokeList: [],
            previousNode: '',
            nextNode: '',
        };

        this.getList = this.getList.bind(this);
    }

    getList = async () => {
        try {
            const longList = await entireList(
                'https://pokeapi.co/api/v2/pokemon'
            );
            console.log('the long list is: ', longList);

            this.setState({ pokeList: longList.results });
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
