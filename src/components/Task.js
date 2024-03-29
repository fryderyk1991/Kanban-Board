import React, { useContext, useState} from 'react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';
import {getNextColumn} from '../helpers';
import columns from '../columnFields';

function Task({ name, user, idTask, idCol }) {
    const { nextHandle, prevHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <ul
            className="task__list list"
            onMouseEnter={() => {
                setIsHovered(true);
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
                        {getNextColumn(idCol, columns) && (
                            <HiOutlineArrowSmallRight
                                className="list__arrow--next"
                                size={25}
                                onClick={() => nextHandle(idTask, idCol)}
                            />
                        )}
                        {idCol !== 1 &&  (
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
};

export default Task;
