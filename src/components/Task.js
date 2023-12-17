import React, { useContext, useState } from 'react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from "react-icons/hi2";
import PropTypes from 'prop-types';
import '../css/task.css';
import TaskContext from '../TaskContext';

function Task({ name, user, idTask, idCol }) {
    const { nextHandle, prevHandle } = useContext(TaskContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleNext = () => {
        if (idCol <= 2) {
            nextHandle(idTask, idCol);
            console.log(idCol)
        }
        return nextHandle;
    }
    const handlePrev = () => {
        if(idCol > 1) {
            prevHandle(idTask, idCol);
        }
        return prevHandle;
       
    }
    return (
        <ul className='task__list list' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? <div className='list__arrows'><HiOutlineArrowSmallRight className='list__arrow--next' size={25} onClick={handleNext}/><HiOutlineArrowSmallLeft  className='list__arrow--prev' size={25} onClick={handlePrev}/></div>: null}
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
