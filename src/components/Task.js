import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';

function Task({ name, user }) {
    const { nextHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        nextHandle();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ul className={isHovered ? 'task__list list task__list--active' : 'task__list list'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li className="task__name list__item">{name}</li>
            <li className="task__user list__item">{user}</li>
        </ul>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    // idColumn: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
};

export default Task;
