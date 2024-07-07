import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// this is eliram dev branch!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    {/* <Router basename="/therapy"> */}
      <App />
    </Router>
  </React.StrictMode>
);
