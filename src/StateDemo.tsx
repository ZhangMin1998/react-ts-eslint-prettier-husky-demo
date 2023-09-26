import React, { FC, useState } from 'react'

const StateDemo: FC = () => {

  const [count, setCount] = useState(0)

  const add = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
    console.log('cur count', count) // 异步更新，无法拿到最新的state值
    // 如果一个变量 不用显示在页面，就用useRef管理
  }

  return (
    <>
      <div>
        <button onClick={add}>{count}</button>
      </div>
    </>
  )
}


export default StateDemo

// state特点
// 1、异步更新
// 2、可能会被合并