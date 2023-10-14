import React, { FC, useContext } from 'react'
import { ThemeContext } from './index'

const ThemeButton:FC = () => {
  const theme = useContext(ThemeContext)
  // 根据theme设置button样式
  const style = {
    color: theme.fore,
    background: theme.background
  }

  return (
    <button style={style}>theme button</button>
  )
}

export default ThemeButton