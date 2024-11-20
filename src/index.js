import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/ApolloClient';

// Lazy load Analytics
const Analytics = React.lazy(() => import('./components/hooks/useAnalytics'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <Suspense fallback={null}>
                    <Analytics />
                </Suspense>
                <App />
            </Router>
        </ApolloProvider>
    </React.StrictMode>
);