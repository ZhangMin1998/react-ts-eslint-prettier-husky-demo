import React from 'react'
import './App.css'
import type { MouseEvent } from 'react'
import logo from './logo.svg'

function App() {
  const add = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event, 111)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
        <div>
          <button onClick={add}>add</button>
        </div>
      </header>
    </div>
  )
}

export default App

