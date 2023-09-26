import React, { FC, useState } from 'react'

const StateDemo: FC = () => {

  const [count, setCount] = useState(0)
  const [userInfo, setUserInfo] = useState({ name: 'zm', age: 25 })

  const add = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
    console.log('cur count', count) // 异步更新，无法拿到最新的state值
    // 如果一个变量 不用显示在页面，就用useRef管理
  }

  const changeAge = () => {
    setUserInfo({ name: 'zm11', age: 666 }) // 不可变数据 不去修改state值 而是传入一个新的值
  }

  return (
    <>
      <div>
        <button onClick={add}>{count}</button>
        <h2>不可变数据</h2>
        <div>{JSON.stringify(userInfo)}</div>
        <button onClick={changeAge}>change age</button>
      </div>
    </>
  )
}


export default StateDemo

// state特点
// 1、异步更新
// 2、可能会被合并
// 3、不可变数据