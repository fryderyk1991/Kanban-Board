const validation = (values) => {
    const errors = {};
    Object.keys(values).forEach((key) => {
        if(!values[key]) {
            errors[key] = 'Field is required!'
        } else delete errors[key];
    })
    return errors;
}

export default validation;