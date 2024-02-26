import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routing from './components/Routing';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routing />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
