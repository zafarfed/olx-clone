import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import Root from './root';
import Context from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Context>
             <Root/>
        </Context>
    </Router>
);
