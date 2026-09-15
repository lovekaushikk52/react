import React, { useState } from 'react'
const App = () => {
  const [color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-xl'>
        <button 
        onClick={()=>{setColor("red")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"red"}} >Red</button>
        

        <button
        onClick={()=>{setColor("green")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"green"}} >Green</button>

        <button 
        onClick={()=>{setColor("blue")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"blue"}} >Blue</button>

        <button 
        onClick={()=>{setColor("pink")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"pink"}} >Pink</button>

        <button 
        onClick={()=>{setColor("purple")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"purple"}} >purple</button>

        <button 
        onClick={()=>{setColor("lavender")}}
        className='p-2 outline-none rounded-xl'
        style={{backgroundColor:"lavender"}} >lavender</button>

        <button 
        onClick={()=>{setColor("black")}}
        className='p-2 outline-none rounded-xl text-white'
        style={{backgroundColor:"black"}} >black</button>
        </div>
        

      </div>
    </div>
  )
}

export default App
