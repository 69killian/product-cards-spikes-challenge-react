import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DotPattern } from './components/dot-pattern';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="h-screen bg-custom-bg bg-contain bg-center mt-10 ">
    <App />
    </div>
  </React.StrictMode>
);


reportWebVitals();
