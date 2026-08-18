import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar2 = () => {

    let navigate=useNavigate()

  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button 
        onClick={()=>{
            navigate('/')
        }} 
        className='bg-gray-700 text-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
        Return to home page
        </button>

        <button 
        onClick={()=>{
            navigate(-1)
        }} 
        className='bg-gray-700 text-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
        Back
        </button>

        <button 
        onClick={()=>{
            navigate(+1)
        }} 
        className='bg-gray-700 text-medium px-5 py-2 rounded m-2 cursor-pointer active:scale-90'>
        Next
        </button>
        
      
    </div>
  )
}

export default Navbar2
