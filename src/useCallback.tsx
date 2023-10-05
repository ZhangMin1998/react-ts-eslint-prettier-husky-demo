import React, { FC, useCallback, useState } from 'react'


const UseCallbackDemo: FC = () => {
  console.log('1111111, useCallback')
  
  const [text, setText] = useState('zm')

  const fn1 = () => console.log('fn1 text: ', text) // 只要组件重新更新，重新执行， 函数就重新定义

  const fn2 = useCallback(() => { // 缓存函数   只要text变化， fn2就会缓存失效， 重新创建函数  二者功能上区别不大, 性能优化不要为了优化而优化
    console.log('fn2 text: ', text)
  }, [text])

  return (
    <div>
      <input onChange={e => setText(e.target.value)} value={text}></input>

      <p>
        <button onClick={fn1}>fn1</button>
        <button onClick={fn2}>fn2</button>
      </p>
    </div>
  )
}


export default UseCallbackDemo