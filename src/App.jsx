import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginPage from './router/LoginPage';
import NoteListPage from './router/NoteListPage';
import Home from "./router/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/noteList" element={<NoteListPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;


