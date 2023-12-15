import React, { useState } from 'react';
import Board from './components/Board';
import BoardContext from './BoardContext';
import TaskContext from './TaskContext';

function App() {
    const { Provider: BoardProvider } = BoardContext;
    const { Provider: TaskProvider } = TaskContext;

    const [colArr, setColArr] = useState([
        {
            id: 1,
            name: 'To Do',
            limit: 4,
        },
        {
            id: 2,
            name: 'In Progress',
            limit: 3,
        },
        {
            id: 3,
            name: 'Completed',
            limit: 4,
        },
    ]);
    const [taskArr, setTaskArr] = useState([
        {
            id: 1,
            name: 'Task1',
            idColumn: 1,
            user: 'Anna',
        },
        {
            id: 2,
            name: 'Task1',
            idColumn: 1,
            user: 'Robert',
        },
        {
            id: 3,
            name: 'Task1',
            idColumn: 1,
            user: 'John',
        },
    ]);

    const nextHandle = () => {
        // console.log('działa')
    }

    return (
        <BoardProvider value={{colArr, setColArr}}>
            <TaskProvider value={{ taskArr, setTaskArr, nextHandle}} >
                <Board />
            </TaskProvider>
        </BoardProvider>
    );
}

export default App;