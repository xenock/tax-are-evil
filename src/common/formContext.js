import React from 'react';
import data from '../data'

export const initialState = {
    submissions: []
}

export const initialFormValues = data.inputFields.reduce((acc, field) => {
    acc[field.id] = ''
    return acc
}, {})

export const ACTIONS = {
    submit: 'submit',
    update: 'update'
}

export const globalReducer = (state, action) => {
    switch (action.type) {
        case 'submit':
            return {
                submissions: [
                    ...state.submissions,
                    action.payload
                ]
            };
        default:
            return state;
    }
}

export const formReducer = (state, action) => {
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
