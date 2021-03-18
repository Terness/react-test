import React from 'react'
import logo from './logo.svg'
import './App.scss'

import { HashRouter as Router } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edi21t <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Router>
    )
}

export default App
