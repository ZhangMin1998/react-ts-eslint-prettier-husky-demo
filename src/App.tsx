import React from 'react'
import './App.css'
// import type { MouseEvent } from 'react'

import List1 from './List1'

function App() {
  let count = 0 // 普通的JS变量，无法触发组件的更新

  const add = () => {
    count++
  }
  return (
    <>
      <List1 />
      <div>
        <button onClick={add}>{count}</button>
      </div>
    </>
  )
}

export default App

