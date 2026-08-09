import React from 'react'
import HeroTxt from './HeroTxt'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
        <HeroTxt/>
        <Arrow/>
        
    </div>
  )
}

export default LeftContent
