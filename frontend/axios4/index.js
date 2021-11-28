import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
    const [pokeList, setPokeList] = useState([]);
    const [nextList, setNextList] = useState('');
    const [previousList, setPreviousList] = useState('');

    useEffect(async () => {
        const list = (await axios.get('https://pokeapi.co/api/v2/pokemon'))
            .data;
        console.log(list);
        setPokeList(list.results);
        setPreviousList(list.previous);
        setNextList(list.next);
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <ul>
                {pokeList.map((ele, idx) => {
                    return <li key={idx}>{ele.name}</li>;
                })}
            </ul>
            <button>Previous</button>
            <button>Next</button>
        </div>
    );
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
