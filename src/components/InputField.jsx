import React from 'react';

export default ({ id, label, placeholder, type, ...rest}) => (
    <>
        <label htmlFor={id}>{label}</label>
        <input name={id} placeholder={placeholder} type={type} {...rest} />
    </>
)
