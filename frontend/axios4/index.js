import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
    const [pokeList, setPokeList] = useState([]);
    const [nextList, setNextList] = useState('');
    const [previousList, setPreviousList] = useState('');

    async function getNode(link) {
        const node = (await axios.get(`${link}`)).data;

        setPokeList(node.results);
        setPreviousList(node.previous);
        setNextList(node.next);
    }

    useEffect(async () => {
        const link = 'https://pokeapi.co/api/v2/pokemon';
        await getNode(link);
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <ul>
                {pokeList.map((ele, idx) => {
                    return <li key={idx}>{ele.name}</li>;
                })}
            </ul>
            <button
                disabled={!previousList}
                onClick={() => getNode(previousList)}
            >
                Previous
            </button>
            <button onClick={() => getNode(nextList)}>Next</button>
        </div>
    );
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
