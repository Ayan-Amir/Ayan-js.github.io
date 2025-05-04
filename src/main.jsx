import React from 'react';

import ReactDOM from 'react-dom/client';

import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';

import './styles/_global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
