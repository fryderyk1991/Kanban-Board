import React, { useState } from 'react';
import Board from './components/Board';
import BoardContext from './BoardContext';
import TaskContext from './TaskContext';
import Form from './components/Form';
import getColumnTaskCount from './tasksFunctions';

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

    const nextHandle = (idTask, idColumn) => {
        if(idColumn <= 2) {
            const nextIdColumn = idColumn + 1;
            const countTaskInColumn = getColumnTaskCount(nextIdColumn, taskArr);
    
            const colLimit = colArr.find((col) => col.id === nextIdColumn).limit;
          
            if (countTaskInColumn < colLimit) {
                const updateTaskArr = taskArr.map((task) =>
                    task.id === idTask ? { ...task, idColumn: task.idColumn + 1 } : task,
                );
                setTaskArr(updateTaskArr);
            } else {
                console.log('above the limit');
            }
        }
        return nextHandle;
    };

    const prevHandle = (idTask, idColumn) => {
        if(idColumn > 1) {
            const prevIdColumn = idColumn - 1;
            const countTaskInColumn = getColumnTaskCount(prevIdColumn, taskArr);
    
            const colLimit = colArr.find((col) => col.id === prevIdColumn).limit;
    
            if (countTaskInColumn < colLimit) {
                const updateTaskArr = taskArr.map((task) =>
                    task.id === idTask ? { ...task, idColumn: task.idColumn - 1 } : task,
                );
                setTaskArr(updateTaskArr);
            } else {
                console.log('above the limit');
            }
        }
        return prevHandle;
      
    };

    // form - dodawanie obiektów z danymi do taskArr

    return (
        <BoardProvider value={{ colArr, setColArr }}>
            <TaskProvider value={{ taskArr, setTaskArr, nextHandle, prevHandle }}>
                <Board />
                <Form />
            </TaskProvider>
        </BoardProvider>
    );
}

export default App;
