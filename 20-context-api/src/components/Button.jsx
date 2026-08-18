import React from 'react'
import { ThemeDataContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Button = () => {

    const [theme,setTheme]=useContext(ThemeDataContext)
    const changeTheme=()=>{
        setTheme('dark')
    }

  return (
    <div>
      <button onClick={changeTheme}>
        change theme
      </button>
    </div>
  )
}

export default Button
