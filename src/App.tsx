import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {

  const [communities, setCommunities] = useState("");
  useEffect(() => {

       
    fetch("https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json", {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }) 
      .then(response => response.text())
      .then(result => setCommunities(result))
      .catch(error => console.log('error', error));

},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          {communities}
        </p>
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
  );
}

export default App;
