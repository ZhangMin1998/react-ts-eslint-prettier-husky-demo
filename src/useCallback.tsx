import React, { FC, useCallback, useState } from 'react'


const UseCallbackDemo: FC = () => {
  console.log('1111111')
  
  const [text, setText] = useState('zm')

  const fn1 = () => console.log('fn1 text: ', text)

  const fn2 = useCallback(() => { // 缓存函数
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