import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import TinyUrl from './pages/TinyURl';
import Home from './pages/Home';
import JsonCorrector from './pages/JsonCorrector';

function App() {
  let component;
  switch(window.location.pathname) {
    case "/":
        component = <Home />;
        break;
    case "/tinyUrl":
      component = <TinyUrl />
      break;
    case "/jsonCorrector":
      component = <JsonCorrector />
      break;
  }
  

  return (
    <div className="App">
      <header>
        <Navbar />
        {component}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <footer className='App-footer'>Contact Us</footer>
    </div>
  );
}

export default App;
