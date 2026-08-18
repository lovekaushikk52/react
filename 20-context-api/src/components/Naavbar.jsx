import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import {ThemeDataContext} from '../context/ThemeContext'

const Naavbar = () => {
  const data=useContext(ThemeDataContext)
  

  return (
    <div className='nav'>
      <h2>Sheriyans</h2>
      <Navbar2 />
    </div>
  )
}

export default Naavbar
