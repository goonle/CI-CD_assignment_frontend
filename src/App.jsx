import React from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginPage from './router/LoginPage';
import NoteListPage from './router/NoteListPage';
import PrivateRoute from "./router/PrivateRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route element={ <PrivateRoute/> }>
                    <Route path="/noteList" element={<NoteListPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;


