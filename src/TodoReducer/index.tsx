import React, { FC } from 'react'
// import initialState from './store'
import List from './List'
import InputForm from './InputForm'

const Demo:FC = () => {

  return (
    <>
      <p>Todo list by reducer</p>
      <List />
      <InputForm />
    </>
  )

}

export default Demo