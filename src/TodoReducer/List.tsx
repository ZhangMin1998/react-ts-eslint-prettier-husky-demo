import React, { FC, useContext } from 'react'
// import reducer from './reducer'
// import initialState from './store'
import { TodoContext } from '.'

const List:FC = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)
  // const [state, dispatch] = useReducer(reducer, initialState)
  const context = useContext(TodoContext)
  const { state, dispatch } = context
  

  const del = (id: string) => {
    dispatch({
      type: 'delete',
      payload: id
    })
  }
  
  return (
    <>
      <p>list</p>
      <ul>
        {
          state.map(item => {
            return <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => del(item.id)}>删除</button>
            </li>
          })
        }
      </ul>
    </>
  )

}

export default List