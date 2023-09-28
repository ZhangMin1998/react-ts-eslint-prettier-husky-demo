import React, { useState } from 'react'
import './App.css'
// import type { MouseEvent } from 'react'

// import List1 from './List1'
import List2 from './List2'
import StateDemo from './useState'
import ImmerDemo from './Immer'
import RefDemo from './useRef'
import UseMemoDemo from './useMemo'
import UseCallbackDemo from './useCallback'

function App() {
  // let count = 0 // 普通的JS变量，无法触发组件的更新
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }
  return (
    <>
      {/* <List1 /> */}
      <div>
        <button onClick={add}>{count}</button>
      </div>
      <StateDemo />
      <List2 />
      <ImmerDemo />
      <RefDemo />
      <UseMemoDemo />
      <UseCallbackDemo />
    </>
  )
}

export default App

