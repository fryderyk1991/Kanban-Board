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
            limit: 2,
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
            name: 'Task2',
            idColumn: 1,
            user: 'Robert',
        },
        {
            id: 3,
            name: 'Task3',
            idColumn: 1,
            user: 'John',
        },
    ]);

    const nextHandle = (id, idCol) => {
        const updateTaskArr = taskArr.map(task => (
            task.id === id ? { ...task, idColumn: task.idColumn + 1} : task
        ))
        setTaskArr(updateTaskArr)    
        console.log(idCol)
    }
    const prevHandle = (id, idCol) => {
        const updateTaskArr = taskArr.map(task => (
            task.id === id ? { ...task, idColumn: task.idColumn - 1} : task
        ))
        setTaskArr(updateTaskArr)   
        console.log(idCol) 
    }

    return (
        <BoardProvider value={{colArr, setColArr}}>
            <TaskProvider value={{ taskArr, setTaskArr, nextHandle, prevHandle}} >
                <Board />
            </TaskProvider>
        </BoardProvider>
    );
}

export default App;