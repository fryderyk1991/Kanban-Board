import React, { useState } from 'react';
import Board from './components/Board';
import TaskContext from './TaskContext';
import Form from './components/Form';
import getColumnTaskCount from './tasksFunctions';
import validation from './validation';
import columns from './columnFields';

function App() {
    const { Provider: TaskProvider } = TaskContext;
    const [values, setValues] = useState({
        taskName: '',
        authorName: '',
    });
    const [errors, setErrors] = useState({});
    const [taskArr, setTaskArr] = useState([]);

    const nextHandle = (idTask, idColumn) => {
        if (idColumn <= 2) {
            const nextIdColumn = idColumn + 1;
            const countTaskInColumn = getColumnTaskCount(nextIdColumn, taskArr);

            const colLimit = columns.find((col) => col.id === nextIdColumn).limit;

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

            const colLimit = columns.find((col) => col.id === prevIdColumn).limit;

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
       
        if (Object.keys(err).length === 0) {
            const newTask = {
                id: taskArr.length + 1,
                name: values.taskName,
                user: values.authorName,
                idColumn: 1, 
            };
            const getFirstCountOfTask = getColumnTaskCount(newTask.idColumn, taskArr);
            const colLimit = columns.find((col) => col.id === newTask.idColumn).limit;
            if (getFirstCountOfTask < colLimit) {
                setTaskArr((prevTaskArr) => [...prevTaskArr, newTask]);
                setValues({
                    taskName: '',
                    authorName: '',
                });
            }
            else {
                console.log('above the limit')
            }
         

        }
    };
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <TaskProvider value={{ taskArr, setTaskArr, nextHandle, prevHandle}}>
            <Board />
            <Form handleSubmit={handleSubmit} values={values} onChange={onChange} errors={errors} />
        </TaskProvider>
    );
}

export default App;
