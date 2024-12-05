import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Styling (if necessary)

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
