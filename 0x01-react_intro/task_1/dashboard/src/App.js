import './App.css';
import React from 'react';
import holberton from './holberton.jpg';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={holberton} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
      </body>
      <footer>
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
