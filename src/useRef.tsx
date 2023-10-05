import React, { FC, useRef } from 'react'


const RefDemo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const selectInput = () => {
    const inputElm = inputRef.current
    console.log(inputElm)
    if (inputElm) inputElm.select() // DOM节点， DOM操作API
  }

  const nameRef = useRef('zm')
  const changeName = () => {
    nameRef.current = 'zm666666' // ref可以传入普通js变量，但更新不会触发rerender （state 会触发rerender）
  }

  return (
    <div>
      <input ref={inputRef} defaultValue='hello world' />
      <button onClick={selectInput}>选中</button>

      <p>name: {nameRef.current}</p>
      <button onClick={changeName}>chang name</button>
    </div>
  )
}


export default RefDemo

// useRef一般用于c操作DOM
// 也可以传入普通JS变量，但不会触发rerender