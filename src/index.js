import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { initGA, logPageView } from './analytics';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/ApolloClient';

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
        <ApolloProvider client={client}>
            <Router>
                <AppWrapper />
            </Router>
        </ApolloProvider>
    </React.StrictMode>
);