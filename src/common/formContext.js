import React from 'react';
import data from '../data'

export const initialState = data.inputFields.reduce((acc, field) => {
    acc[field.id] = ''
    return acc
}, {})

export const ACTIONS = {
    update: 'update'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

const FormContext = React.createContext()

export default FormContext
