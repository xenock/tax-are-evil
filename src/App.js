import React, { useReducer, useMemo } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './assets/logo.png';
import './App.css';

import { Form, List } from './components';
import formData from './data'
import FormContext, { globalReducer, initialState } from './common/formContext';

const App = () => {
    const [ state, dispatch ] = useReducer(globalReducer, initialState)

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <FormContext.Provider value={contextValue}>
            <Router>
                <main className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                    <Switch>
                        <Route path="/submissions">
                            <section className="App-content">
                                <List />
                            </section>
                        </Route>
                        <Route path="/">
                            <section className="App-content">
                                <Form {...formData} />
                            </section>
                        </Route>
                    </Switch>
                </main>
            </Router>
        </FormContext.Provider>
    );
}

export default App;
