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
            page: 1,
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
            let { page } = this.state;

            const nextList = await entireList(nextNode);
            // console.log(nextNode);
            // console.log('next!');
            page++;
            this.setState({
                pokeList: nextList.results,
                previousNode: nextList.previous,
                nextNode: nextList.next,
                page,
            });
        } catch (error) {
            console.log(error);
        }
    };

    previousList = async () => {
        try {
            const { previousNode } = this.state;
            let { page } = this.state;

            const previousList = await entireList(previousNode);
            // console.log(nextNode);
            // console.log('next!');
            page--;
            this.setState({
                pokeList: previousList.results,
                previousNode: previousList.previous,
                nextNode: previousList.next,
                page,
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { pokeList, previousNode, page } = this.state;
        // console.log('the state is', pokeList);

        return (
            <div>
                <h1>hello from the Component</h1>
                <p>Page: {page}</p>
                <ul>
                    {pokeList.map((ele, idx) => {
                        return <li key={idx}>{ele.name}</li>;
                    })}
                </ul>
                <button
                    disabled={!previousNode}
                    onClick={() => {
                        this.previousList();
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
