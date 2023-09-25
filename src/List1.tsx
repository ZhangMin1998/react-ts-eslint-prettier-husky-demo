import React, { FC } from 'react'
// import type { FC } from 'react'

import QuestionCard from './components/QuestionCard'

const List1: FC = () => {
  // 问卷列表数据
  const questionList = [
    { id: 'q1', title: '问题1', isPublished: false },
    { id: 'q2', title: '问题2', isPublished: true },
    { id: 'q3', title: '问题3', isPublished: false },
    { id: 'q4', title: '问题4', isPublished: true }
  ]
  // const edit = (id:string) => {
  //   console.log('edit', id)
  // }
  
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        { questionList.map(item => {
          const { id, title, isPublished } = item
          return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} />
        })}
      </div>
    </div>
  )
}

export default List1