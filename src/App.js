import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import i18n from './common/i18n';

import formData from './data'

function App() {
    return (
        <main className="App">
            <section>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {i18n.REACTOR}
                    </p>
                </header>
            </section>
        </main>
    );
}

export default App;
