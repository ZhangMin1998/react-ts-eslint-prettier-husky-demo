import React, { FC, useState } from 'react'
import { produce } from 'immer'

const ImmerDemo: FC = () => {

  const [userInfo, setUserInfo] = useState({ name: 'zm', age: 25 })
  
  const changeAge = () => {
    // setUserInfo({ name: 'zm11', age: 666 }) // 不可变数据 不去修改state值 而是传入一个新的值
    setUserInfo(produce(draft => {
      draft.age = 999
    }))
  }

  return (
    <>
      <div>
        <h2>不可变数据</h2>
        <div>{JSON.stringify(userInfo)}</div>
        <button onClick={changeAge}>change age</button>
      </div>
    </>
  )
}


export default ImmerDemo


// 使用immer
// 1、state是不可变数据
// 2、操作成本高，不稳定性
// 3、使用immer避免这个问题