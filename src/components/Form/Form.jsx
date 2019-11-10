import React, { useContext, useReducer } from 'react';
import { InputField } from '..';
import FormContext, { ACTIONS, initialFormValues, formReducer } from '../../common/formContext'
import { Link } from 'react-router-dom'

const handleSubmit = dispatch => formValues => e => {
    e.preventDefault();
    dispatch({type: ACTIONS.submit, payload: formValues})
}

const handleChange = dispatch => argo => {
    dispatch({type: ACTIONS.update, payload: { [argo.target.name]: argo.target.value}})
}

export default ({inputFields}) => {
    const { state, dispatch } = useContext(FormContext)
    const [ formValues, setFormValues ] = useReducer(formReducer, initialFormValues)

    const formProps = {
        onSubmit: handleSubmit(dispatch)(formValues),
        onChange: handleChange(setFormValues)
    }

    return (
        <>
            <form className="App-form" {...formProps}>
                {inputFields.map(field => <InputField key={field.id} {...field} />)}
                <input type="submit" value="Submit" />
            </form>
            <Link to="/submissions">Amonooooo</Link>
        </>
    )
}
