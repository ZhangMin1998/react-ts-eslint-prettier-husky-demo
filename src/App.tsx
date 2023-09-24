import React from 'react'
import './App.css'
import type { MouseEvent } from 'react'
import logo from './logo.svg'

function App() {
  const flag = true
  const add = (event: MouseEvent<HTMLButtonElement>, num: number) => {
    console.log(event, num)
  }
  const Hello = () => {
    if (flag) return <p>666</p>
    return <p>999</p>
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
          <button onClick={event => add(event, 6666)}>add</button>
        </div>
        <div>
          <p>{flag && 222}</p>
          <p>{flag ? 111 : '000'}</p>
          <Hello></Hello>
        </div>
      </header>
    </div>
  )
}

export default App

