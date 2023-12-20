import React from "react"; 
import PropTypes from 'prop-types';
import inputs from '../inputs';
import '../css/form.css';

function Form({ handleSubmit, onChange, values }) {
    return (
        <section className="section__add-task add-task">
            <form className="add-task__form form" onSubmit={handleSubmit} noValidate>
                {inputs.map((field) => (
                    <label className="form__label form__item" htmlFor={field.name} key={field.name}>
                        {' '}
                        {field.label}{' '}
                        <input
                            className="form__input form__item"
                            name={field.name}
                            type={field.type}
                            value={values[field.name]}
                            onChange={onChange}
                            required
                        />
                    </label>
                ))}
                <button type="submit">Add task</button>
            </form>
        </section>
    );
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
        taskName: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
    }).isRequired,
};

export default Form;