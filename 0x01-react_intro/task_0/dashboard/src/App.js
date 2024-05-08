import './App.css';
import React from 'react';
import holberton from './holberton.jpg';

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
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
