// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [a,setA]=useState(10)
//   // a will set the value and set a will print the value
//   const[username,SetUsername]=useState("rahul gandhi")
//   const[users,setUsers]=useState([10,20,30,40])

//   function changeA(){
//     setA(30)
//     SetUsername('rishu raj')
//     setUsers([12,24,36])
//   }
  
//   return (
//     <div>
//       <h1>value of a is: {a} <br /> {users}<br /> value of username is: {username} </h1>
//       <button onClick={changeA}>click</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'

const App = () => {
  const[num,setNum]=useState(0)
  
  function increaseNum(){
    setNum(num+1)
  }

  function decreseNum(){
    setNum(num-1)
  }
  function jump5(){
    setNum(num+5)
  }
  

  return (
    <div>
      <h2>button clicker</h2>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreseNum}>decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  )
}

export default App
