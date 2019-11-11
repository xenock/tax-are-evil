import React, { useContext, useReducer } from 'react';
import { array } from 'prop-types';
import { InputField } from '..';
import FormContext, { ACTIONS, initialFormValues, formReducer } from '../../common/formContext'
import style from './Form.module.scss'

const handleSubmit = dispatch => formValues => e => {
    e.preventDefault();
    dispatch({type: ACTIONS.submit, payload: formValues})
}

const handleChange = dispatch => argo => {
    dispatch({type: ACTIONS.update, payload: { [argo.target.name]: argo.target.value}})
}

const Form = ({inputFields}) => {
    const { dispatch } = useContext(FormContext)
    const [ formValues, setFormValues ] = useReducer(formReducer, initialFormValues)

    const formProps = {
        onSubmit: handleSubmit(dispatch)(formValues),
        onChange: handleChange(setFormValues)
    }

    return (
        <>
            <form className={style.form} {...formProps}>
                {inputFields.map(field => <InputField key={field.id} {...field} />)}
                <input className={style.submit} type="submit" value="Submit" />
            </form>
        </>
    )

}

Form.propTypes = {
    inputFields: array
};

Form.defaultProps = {
    inputFields: []
}

export default Form;
