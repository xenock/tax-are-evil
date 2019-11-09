import React from 'react';
import InputField from './InputField';

const handleSubmit = (e) => {
    e.preventDefault();
}

const handleChange = (argo) => {
    console.log({ name: argo.target.name, value: argo.target.value})
}

export default ({inputFields}) => (
    <form className="App-form" onSubmit={handleSubmit} onChange={handleChange}>
        {inputFields.map(field => <InputField key={field.id} {...field} />)}
        <input type="submit" value="Submit" />
    </form>
)
