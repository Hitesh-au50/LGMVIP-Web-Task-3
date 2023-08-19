// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main App component and the index.css file
import App from './App.jsx';
import './index.css';

// Use ReactDOM.createRoot to render the App component into the 'root' element
// within a StrictMode for improved debugging and warnings
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
