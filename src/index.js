import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="h-screen bg-custom-bg bg-cover bg-center flex items-center justify-center">
    <App />
    </div>
  </React.StrictMode>
);


reportWebVitals();
