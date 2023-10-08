import React, { FC, useState, ChangeEvent } from 'react'
// import type { ChangeEvent } from 'react'

const FormDemo: FC = () => {

  // input
  const [text, setText] = useState<string>('input')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  // textarea
  const [text2, setText2] = useState<string>('textarea')
  const handleChange2 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText2(event.target.value)
  }
  const getHtml = () => {
    return { __html: text2.replaceAll('\n', '<br>') }
  }

  return (
    <>
      <div>
        FormDemo:
        <div>
          <span>input:</span>
          <input type="text" value={text} onChange={handleChange}/>
          <button onClick={() => console.log(text)}>打印</button>
          <button onClick={() => setText('66666666')}>set</button>
        </div>
        <div>
          <span>textarea</span>
          <textarea value={text2} onChange={handleChange2}/>
          <p dangerouslySetInnerHTML={getHtml()}></p>
        </div>
      </div>
    </>
  )
}


export default FormDemo

// 受控组件 vs 非受控组件
// 受控组件: 值同步到state, 使用value属性
// 非受控组件: 值不同步state, 使用defaultValue属性
// react推荐使用受控组件， 看似麻烦，但是 更加可控