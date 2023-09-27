import React, { FC, useState } from 'react'
// import type { FC } from 'react'
import { produce } from 'immer'

import QuestionCard from './components/QuestionCard'

const List2: FC = () => {
  // 问卷列表数据
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问题1', isPublished: false },
    { id: 'q2', title: '问题2', isPublished: true },
    { id: 'q3', title: '问题3', isPublished: false },
    { id: 'q4', title: '问题4', isPublished: true }
  ])
  const addList = () => {
    // setQuestionList(questionList.concat({
    //   id: 'q' + Math.random().toString().slice(-3), title: '问题5', isPublished: true
    // }))
    setQuestionList(produce(draft => {
      draft.push({ id: 'q' + Math.random().toString().slice(-3), title: '问题5', isPublished: false })
    }))
  }
  const deleteQuestion = (id: string) => {
    // setQuestionList(questionList.filter(item => item.id !== id))
    setQuestionList(produce(draft => {
      const index = draft.findIndex(q => q.id === id)
      draft.splice(index, 1)
    }))
  }
  const pubQuestion = (id: string) => {
    // setQuestionList(questionList.map(item => {
    //   if (item.id !== id) return item
    //   return {
    //     ...item,
    //     isPublished: true
    //   }
    // }))
    setQuestionList(produce(draft => {
      const index = draft.findIndex(q => q.id === id)
      draft[index].isPublished = true
    }))
  }
  
  return (
    <div>
      <h1>问卷列表页2</h1>
      <div>
        { questionList.map(item => {
          const { id, title, isPublished } = item
          return <QuestionCard key={id} id={id} title={title} isPublished={isPublished} deleteQuestion={deleteQuestion} pubQuestion={pubQuestion}/>
        })}
        <button onClick={addList}>addList</button>
      </div>
    </div>
  )
}

export default List2