import React, { useContext, useState} from 'react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';
import {getColumnTaskCount, getNextColumn} from '../helpers';
import columns from '../columnFields';

function Task({ name, user, idTask, idCol, tasks }) {
    const { nextHandle, prevHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [showLeftArrow, setShowLeftArrow] = useState(true);

    const nextArrow = () => {
        if (idCol <= 2) {
            const nextCol = idCol + 1;
            const countTaskInColumn = getColumnTaskCount(nextCol, tasks);
            const colLimit = columns.find((col) => col.id === nextCol).limit;

            if (countTaskInColumn >= colLimit) {
                setShowRightArrow(false);
            } else {
                setShowRightArrow(true);
            }
        }
    };

    const prevArrow = () => {
        if (idCol > 1) {
            const prevCol = idCol - 1;
            const countTaskInColumn = getColumnTaskCount(prevCol, tasks);
            const colLimit = columns.find((col) => col.id === prevCol).limit;

            if (countTaskInColumn >= colLimit) {
                setShowLeftArrow(false);
            } else {
                setShowLeftArrow(true);
            }
        }
    };

    return (
        <ul
            className="task__list list"
            onMouseEnter={() => {
                setIsHovered(true);
                nextArrow(console.log(idCol));
                prevArrow();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
            }}
        >
            <li className="task__name list__item">{name}</li>
            <li className="task__user list__item">
                {user}
                {isHovered ? (
                    <div className="list__arrows">
                        {getNextColumn(idCol, columns) && showRightArrow && (
                            <HiOutlineArrowSmallRight
                                className="list__arrow--next"
                                size={25}
                                onClick={() => nextHandle(idTask, idCol)}
                            />
                        )}
                        {idCol !==1  && showLeftArrow && (
                            <HiOutlineArrowSmallLeft
                                className="list__arrow--prev"
                                size={25}
                                onClick={() => prevHandle(idTask, idCol)}
                            />
                        )}
                    </div>
                ) : null}
            </li>
        </ul>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    idTask: PropTypes.number.isRequired,
    idCol: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(Object).isRequired,
};

export default Task;
