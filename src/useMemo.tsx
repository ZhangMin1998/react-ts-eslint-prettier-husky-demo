import React, { FC, useMemo, useState } from 'react'


const UseMemoDemo: FC = () => {
  console.log('1111111， useMemo')
  
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('zm') // 更新 导致组件rerender

  const sum = useMemo(() => { // useMemo缓存数据
    console.log('gen  sum。。。。') // 缓存
    
    return num1 + num2
  }, [num1, num2])

  return (
    <div>
      <p>{sum}</p>
      <p>
        {num1}  <button onClick={() => setNum1(num1 + 1)}>num1++</button>
      </p>
      <p>
        {num2}  <button onClick={() => setNum2(num2 + 1)}>num2++</button>
      </p>
      <div>
        <input onChange={e => setText(e.target.value)} value={text}></input>
      </div>
    </div>
  )
}


export default UseMemoDemo