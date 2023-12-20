import React, { useState } from 'react';
import Board from './components/Board';
import BoardContext from './BoardContext';
import TaskContext from './TaskContext';
import Form from './components/Form';
import getColumnTaskCount from './tasksFunctions';
import validation from './validation';

function App() {
    const { Provider: BoardProvider } = BoardContext;
    const { Provider: TaskProvider } = TaskContext;
    const [values, setValues] = useState({
        taskName: '',
        authorName: '',
    });
    const [errors, setErrors] = useState({})
    /// colArr przenieśc do osobnego pliku - nie zmieniamy state, więc nam to nie potrzebne
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
        if (idColumn <= 2) {
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
        if (idColumn > 1) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validation(values);
        setErrors(err);
        console.log(errors)
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        console.log(name, value)
    };
    return (
        <BoardProvider value={{ colArr, setColArr }}>
            <TaskProvider value={{ taskArr, nextHandle, prevHandle }}>
                <Board />
                <Form handleSubmit={handleSubmit} values={values} onChange={onChange} errors={errors}/>
            </TaskProvider>
        </BoardProvider>
    );
}

export default App;
