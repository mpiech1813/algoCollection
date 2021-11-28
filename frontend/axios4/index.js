import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
    const [pokeList, setPokeList] = useState([]);

    useEffect(async () => {
        const list = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data
            .results;
        setPokeList(list);
        console.log(pokeList);
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <ul>
                {pokeList.map((ele) => {
                    return <li>{ele.name}</li>;
                })}
            </ul>
        </div>
    );
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
