import React, { useReducer, useMemo } from 'react';
import logo from './assets/logo.png';
import './App.css';

import { Form } from './components';
import formData from './data'
import FormContext, { globalReducer, initialState } from './common/formContext';

const App = () => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState)

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <FormContext.Provider value={contextValue}>
            <main className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <section className="App-content">
                    <Form {...formData} />
                </section>
            </main>
        </FormContext.Provider>
    );
}

export default App;
