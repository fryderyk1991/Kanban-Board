import React from "react";
import PropTypes from 'prop-types'
import '../css/column.css';

function Column( {name, limit} ) {
    return (
        <section className="bord__column column">
            <header className="column__header">{name}</header>
            <footer className="column__footer">{limit}</footer>
        </section>
    )
}

Column.propTypes = {
    name: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
};

export default Column;