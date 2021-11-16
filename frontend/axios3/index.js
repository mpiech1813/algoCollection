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
    }

    async componentDidMount() {
        try {
            const longList = await entireList(
                'https://pokeapi.co/api/v2/pokemon'
            );

            console.log(longList);

            this.setState({
                pokeList: longList.results,
                previousNode: longList.previous,
                nextNode: longList.next,
            });
        } catch (error) {
            console.log(error);
        }
    }

    nextList = async () => {
        try {
            const { nextNode } = this.state;

            const nextList = await entireList(nextNode);
            // console.log(nextNode);
            // console.log('next!');

            this.setState({
                pokeList: nextList.results,
                previousNode: nextList.previous,
                nextNode: nextList.next,
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { pokeList } = this.state;
        // console.log('the state is', pokeList);

        return (
            <div>
                <h1>hello from the Component</h1>
                <ul>
                    {pokeList.map((ele, idx) => {
                        return <li key={idx}>{ele.name}</li>;
                    })}
                </ul>
                <button
                    onClick={() => {
                        console.log('previous');
                    }}
                >
                    Previous
                </button>
                <button onClick={() => this.nextList()}>Next</button>
            </div>
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
