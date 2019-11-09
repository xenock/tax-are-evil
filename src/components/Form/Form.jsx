import React, { useContext } from 'react';
import { InputField } from '..';
import FormContext, { ACTIONS } from '../../common/formContext'

const handleSubmit = e => {
    e.preventDefault();
}

const handleChange = dispatch => argo => {
    dispatch({type: ACTIONS.update, payload: { [argo.target.name]: argo.target.value}})
}

export default ({inputFields}) => {
    const { state, dispatch } = useContext(FormContext)
    console.log('state', state)

    return (
        <form className="App-form" onSubmit={handleSubmit} onChange={handleChange(dispatch)}>
            {inputFields.map(field => <InputField key={field.id} {...field} />)}
            <input type="submit" value="Submit" />
        </form>
    )
}
