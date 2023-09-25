import React, { FC } from 'react'
// import type { FC } from 'react'

const List1: FC = () => {
  // 问卷列表数据
  const questionList = [
    { id: 'q1', title: '问题1', isPublished: false },
    { id: 'q2', title: '问题2', isPublished: true },
    { id: 'q3', title: '问题3', isPublished: false },
    { id: 'q4', title: '问题4', isPublished: true }
  ]
  const edit = (id:string) => {
    console.log('edit', id)
  }
  
  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        { questionList.map(item => {
          return <div key={item.id} className='list-item'>
            <strong>{item.title}</strong>
            &nbsp;
            { item.isPublished ? <span style={{ color: 'blue' }}>已发布</span> : <span>未发布</span> }
            &nbsp;
            <button onClick={() => edit(item.id)}>编辑问题</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default List1