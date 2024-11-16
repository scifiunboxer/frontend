import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Certifications from './Certifications';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to the Certification Tracker</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/" element={<Certifications />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
