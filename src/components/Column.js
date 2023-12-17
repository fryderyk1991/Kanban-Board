import React from "react";
import PropTypes from 'prop-types';
import TaskContext from '../TaskContext';
import Task from './Task';
import '../css/column.css';

function Column({ name, limit, id }) {
    const { Consumer: TaskConsumer } = TaskContext;
    return (
        <section className="bord__column column">
            <header className="column__header">{name}</header>
            <main className="column__task task">
                <TaskConsumer>
                    {(context) => (
                        <div className="task__container">
                            {context.taskArr.filter(item => item.idColumn === id).map(filteredItem => (
                                <Task key={filteredItem.id} name={filteredItem.name} user={filteredItem.user} idTask={filteredItem.id} idCol={filteredItem.idColumn}/>
                            ))}
                        </div>
                    )}
                </TaskConsumer>
            </main>
            <footer className="column__footer">{limit}L</footer>
        </section>
    );
}



Column.propTypes = {
    name: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default Column;