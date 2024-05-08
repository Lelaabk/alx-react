import './App.css';
import React from 'react';
import holberton from './holberton.jpg';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  const handleLabelClick = (inputId) => {
    const inputElement = document.getElementById(inputId);
    inputElement.focus();
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={holberton} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" onClick={() => handleLabelClick('email')}>
          Email:
        </label>
        <input type="email" id="email" />
        <label htmlFor="password" onClick={() => handleLabelClick('password')}>
          Password:
        </label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <div>
        <footer>
          <p className='footerp'>
            Copyright {getFooterCopy(true)} - {getFullYear()}
          </p>
        </footer>
        <style>
        {`
          label, button {
            margin-left: 6px; /* Add margin between labels */
            display: inline; /* Ensure each label appears on a new line */
          }
        `}
      </style>
      </div>
      
    </div>
  );
}

export default App;
