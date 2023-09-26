import React, { FC } from 'react'
import './index.css'

type PropsType = {
  id: string
  title: string
  isPublished: boolean,
  deleteQuestion?: (id: string) => void,
  pubQuestion?: (id: string) => void
}

const questionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, pubQuestion } = props
  const del = (id:string) => {
    deleteQuestion && deleteQuestion(id)
  }
  const pub = (id:string) => {
    pubQuestion && pubQuestion(id)
  }

  return <div key={id} className='list-item'>
    <strong>{title}</strong>
    &nbsp;
    { isPublished ? <span style={{ color: 'blue' }}>已发布</span> : <span>未发布</span> }
    &nbsp;
    <button onClick={() => pub(id)}>发布</button>
    <button onClick={() => del(id)}>删除</button>
  </div>
}

export default questionCard