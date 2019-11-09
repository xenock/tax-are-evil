import React, { useReducer } from 'react';
import logo from './assets/logo.png';
import './App.css';

import { Form} from './components';
import formData from './data'
import FormContext, { reducer, initialState } from './common/formContext';

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <FormContext.Provider value={{state, dispatch}}>
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
