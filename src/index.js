import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!!');
// var element2 = React.createElement('h2', { className: 'greeting' }, 'This is a lot more organized!!');

// ReactDOM.render(element, document.getElementById('root'));

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // element
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
