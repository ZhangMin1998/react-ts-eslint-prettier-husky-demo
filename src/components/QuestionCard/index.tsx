import React, { FC } from 'react'
import './index.css'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
}

const questionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished } = props
  const edit = (id:string) => {
    console.log('edit', id)
  }

  return <div key={id} className='list-item'>
    <strong>{title}</strong>
    &nbsp;
    { isPublished ? <span style={{ color: 'blue' }}>已发布</span> : <span>未发布</span> }
    &nbsp;
    <button onClick={() => edit(id)}>编辑问题</button>
  </div>
}

export default questionCard