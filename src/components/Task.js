import React, { useContext, useState } from 'react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from "react-icons/hi2";
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';

function Task({ name, user, idTask, idCol }) {
    const { nextHandle, prevHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        nextHandle(idTask, idCol);
    }
    const handlePrev = () => {
        prevHandle(idTask, idCol);
    }
    return (
        <ul className='task__list list' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? <div className='list__arrows'><div className='list__arrow--next'><HiOutlineArrowSmallRight size={25} onClick={handleNext}/></div><div className='list__arrow--prev'><HiOutlineArrowSmallLeft size={25} onClick={handlePrev}/></div></div>: null}
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
};

export default Task;
