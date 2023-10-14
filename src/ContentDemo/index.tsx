import React, { FC, createContext, useState } from 'react'
import ToolBar from './ToolBar'

const themes = {
  light:{
    fore: '#000',
    background: 'pink'
  },
  dark:{
    fore: '#fff',
    background: '#222'
  }
} 
// 定义 ThemeContext
export const ThemeContext = createContext(themes.light)

const ContentDemo: FC = () => {
  const [theme, setTheme] = useState(themes.light)
  const toDark = () => {
    setTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <div>
          <span>Context Demo</span>
          <button onClick={toDark}>dark</button>
        </div>
      </div>
      <ToolBar />
    </ThemeContext.Provider>
  )
}

export default ContentDemo