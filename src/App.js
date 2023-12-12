import React, { useState } from 'react';
import Board from './components/Board';
import BoardContext from './context';

function App() {
    const { Provider } = BoardContext;
    const [arr] = useState([
        {
            id: 1,
            name: 'Pending',
            limit: 4,
        },
        {
            id: 2,
            name: 'Analysis-Doing',
            limit: 3,
        },
        {
            id: 3,
            name: 'Analysis-Done',
            limit: 4,
        },
    ]);
    return (
        <Provider value={arr}>
            <Board />
        </Provider>
    );
}

export default App;
