import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { initGA, logPageView } from './analytics';
import { useEffect } from 'react';

const AppWrapper = () => {
    useEffect(() => {
        initGA();
        logPageView();
        window.addEventListener('popstate', logPageView);
        return () => window.removeEventListener('popstate', logPageView);
    }, []);

    return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <AppWrapper />
        </Router>
    </React.StrictMode>
);