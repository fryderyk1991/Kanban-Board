import React, { useContext, useState, useEffect } from 'react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';
import { getColumnTaskCount } from '../tasksFunctions';

function Task({ name, user, idTask, idCol, limit, tasks }) {
    const { nextHandle, prevHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);
    const [tasksInColumn, setTasksInColumn] = useState(null);

    useEffect(() => {
        const getTasksInCol = getColumnTaskCount(idCol, tasks);
        console.log(tasksInColumn)
        setTasksInColumn(getTasksInCol);
    }, []);

    const handleNext = () => {
        if (tasksInColumn < limit) {
            nextHandle(idTask);
        }
        // const getTasksInCol = getColumnTaskCount(idCol, tasks);
        // if (getTasksInCol < limit) {
        //     nextHandle(idTask);
        // }
        // return nextHandle

        // console.log(tasks)
        // if (idCol <= 2) {
        //     nextHandle(idTask);
        // }
        // return nextHandle;
    };
    const handlePrev = () => {
        console.log(limit, tasks);
        if (idCol > 1) {
            prevHandle(idTask);
        }
        return prevHandle;
    };

    return (
        <ul
            className="task__list list"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <div className="list__arrows">
                    <HiOutlineArrowSmallRight className="list__arrow--next" size={25} onClick={handleNext} />
                    <HiOutlineArrowSmallLeft className="list__arrow--prev" size={25} onClick={handlePrev} />
                </div>
            ) : null}
            <li className="task__name list__item">{name}</li>
            <li className="task__user list__item">{user}</li>
        </ul>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    idTask: PropTypes.number.isRequired,
    idCol: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default Task;
