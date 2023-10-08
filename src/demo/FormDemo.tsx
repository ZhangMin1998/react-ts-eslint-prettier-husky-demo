// 受控组件

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

  // radio
  const [gender, setGender] = useState<string>('male')
  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value)
  }

  // checkbox
  // const [checked, setChecked] = useState(false)
  // const handleChange4 = (event: ChangeEvent<HTMLInputElement>) => {
  //   setChecked(!checked)
  // }

  // checkbox组
  const [selectedFruitList, setselectedFruitList] = useState<string[]>([])
  const handleChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    const fruit = event.target.value
    if (selectedFruitList.includes(fruit)) {
      setselectedFruitList(selectedFruitList.filter(f => {
        if (f === fruit) return false
        return true
      }))
    } else {
      setselectedFruitList(selectedFruitList.concat(fruit))
    }
  }

  // select
  const [lang, setLang] = useState<string>('js')
  const handleChange6 = (event: ChangeEvent<HTMLSelectElement>) => {
    setLang(event.target.value)
  }


  return (
    <>
      <div>
        FormDemo:
        <div>
          <span>input：</span>
          <input type="text" value={text} onChange={handleChange}/>
          <button onClick={() => console.log(text)}>打印</button>
          <button onClick={() => setText('66666666')}>set</button>
        </div>
        <div>
          <span>textarea：</span>
          <textarea value={text2} onChange={handleChange2}/>
          <p dangerouslySetInnerHTML={getHtml()}></p>
        </div>
        <div>
          <span>radio：</span>
          <label htmlFor="radio1">男</label>
          <input type="radio" value='male' name='gender' id='radio1' onChange={handleChange3} checked={gender === 'male'}/>
          <label htmlFor="radio2">女</label>
          <input type="radio" value='female' name='gender' id='radio2' onChange={handleChange3} checked={gender === 'female'}/>
          <button onClick={() => console.log(gender)}>打印{gender}</button>
        </div>
        {/* <div>
          <span>checkbox：</span> 
          <label htmlFor="checkbox1">选中</label>
          <input type="checkbox" id='checkbox' checked={checked} onChange={handleChange4}/>{checked.toString()}
        </div> */}
        <div>
          <span>checkbox组：</span> 
          <label htmlFor="checkbox1">苹果</label>
          <input type="checkbox" id='checkbox1' value='apple' checked={selectedFruitList.includes('apple')} onChange={handleChange5}/>
          <label htmlFor="checkbox2">橙子</label>
          <input type="checkbox" id='checkbox2' value='orange' checked={selectedFruitList.includes('orange')} onChange={handleChange5}/>
          <label htmlFor="checkbox3">香蕉</label>
          <input type="checkbox" id='checkbox3' value='banana' checked={selectedFruitList.includes('banana')} onChange={handleChange5}/>
          {JSON.stringify(selectedFruitList)}
        </div>
        <div>
          <span>select：</span>
          <select value={lang} onChange={handleChange6}>
            <option value='java'>java</option>
            <option value='js'>js</option>
            <option value='php'>php</option>
          </select>
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