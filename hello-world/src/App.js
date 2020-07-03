import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const loading=false;
  const name="Moulina";
  
  return (
    <React.Fragment>
    <h1>Hey</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!loading &&<p>Hello {name}</p>}
        {loading &&<p>Hello {name}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </React.Fragment>
    );
}

export default App;
