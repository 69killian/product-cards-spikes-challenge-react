import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="h-screen bg-custom-bg bg-contain bg-center flex items-center justify-center fixed top-0 right-0 left-0 bottom-0 overflow-y-scroll ">
    <App />
    </div>
  </React.StrictMode>
);


reportWebVitals();
