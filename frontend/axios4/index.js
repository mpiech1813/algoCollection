import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [pokeList, setPokeList] = useState('');

    useEffect(() => {});

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

const root = document.getElementById('app');

ReactDOM.render(<App />, root);
