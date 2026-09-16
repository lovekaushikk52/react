import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='flex flex-wrap bg-gray-700 text-white justify-between px-3 py-1 '>
      <img className='w-1/25 h-1/25 object-cover overflow-hidden' src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="no logo" />
      <ul className='flex wrap gap-3 items-center bg-yellow-400 text-black rounded-xl px-2 ' >
       <Link to='/'> <li>Home</li></Link>
       <Link to='/contact'> <li>Contact</li></Link>
       <Link to='/about'> <li>About</li></Link>
       <Link to='/product'> <li>Products</li></Link>
      </ul>
      <button className='bg-red-500 px-3 py-1 text-white rounded-xl h-2/3 hover:bg-blue-400 mt-2 border-0 outline-0'>Get started</button>
    </div>
    </>
  )
}

export default Navbar
