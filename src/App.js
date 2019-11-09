import React from 'react';
import logo from './assets/logo.png';
import './App.css';

import Form from './components/Form'
import formData from './data'

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <section className="App-content">
                <Form {...formData} />
            </section>
        </main>
    );
}

export default App;
