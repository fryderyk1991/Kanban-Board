import React from 'react';
import PropTypes from 'prop-types';
import '../css/task.css';

function Task({ name, user }) {
    return (
        <ul className='task__list list'>
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
