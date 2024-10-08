import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/ApolloClient';
import Analytics from './components/hooks/useAnalytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <Analytics />
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>
);