import React, { FC, useState, useEffect } from 'react'
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

  // useEffect
  useEffect(() => {
    console.log('加载ajax网络请求')
    return () => {
      console.log('销毁')
    }
  }, []) // []无依赖

  // useEffect(() => {
  //   console.log('questionList change')
  // }, [questionList]) // 
  
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


// useEffect
// useEffect(() => {
//   console.log('加载ajax网络请求')
//   return () => {
//     console.log('销毁')
//   }
// }, [])

// React18开始， useEffect在开发环境下执行2次  生产环境下执行一次
// 模拟组件创建、销毁、再创建的完整流程、及早暴露问题