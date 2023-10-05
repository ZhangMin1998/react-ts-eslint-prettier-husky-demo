import React, { FC } from 'react'
import './index.css'

import classnames from 'classnames'

type PropsType = {
  id: string
  title: string
  isPublished: boolean,
  // eslint-disable-next-line
  deleteQuestion?: (id: string) => void,
  // eslint-disable-next-line
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

  // useEffect(() => {
  //   console.log('q card mounted')
  //   return () => {
  //     console.log('q card unmounted')
  //   }
  // })

  // const itemClassName = classnames(
  //   'list-item',
  //   { isPublished: isPublished }
  // )
  const itemClassName = classnames({
    'list-item': true,
    isPublished: isPublished
  })

  return <div key={id} className={itemClassName}>
    <strong>{title}</strong>
    &nbsp;
    { isPublished ? <span style={{ color: 'blue' }}>已发布</span> : <span>未发布</span> }
    &nbsp;
    <button onClick={() => pub(id)}>发布</button>
    <button onClick={() => del(id)}>删除</button>
  </div>
}

export default questionCard