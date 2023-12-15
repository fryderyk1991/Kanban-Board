import React, { useContext, useState } from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';

function Task({ name, user, idTask }) {
    const { nextHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        nextHandle(idTask);
    }

    return (
        <ul className={isHovered ? 'task__list list task__list--active' : 'task__list list'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? <div className='list__arrow-right'><HiOutlineArrowSmallRight size={25} onClick={handleClick}/></div> : null}
            <li className="task__name list__item">{name}</li>
            <li className="task__user list__item">{user}</li>
        </ul>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired,
    // idColumn: PropTypes.number.isRequired,
    idTask: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
};

export default Task;
