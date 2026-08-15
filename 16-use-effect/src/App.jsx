//in react our main work iss to render the ui but wwe have to do other tasks like calling api and dom manipulation and useEffect allow us us to do other works side by side

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

// const App = () => {

//   const [num,setNum]=useState(0)
//   const[num2,setNum2]=useState(100)

//   useEffect(function(){
//     console.log("use effect is running...")
//   },[num])
//   return (
//     <div>
//       <div>
//         <h1>num 1 is {num}</h1>
//         <h2> num 2 is {num2}</h2>

//         <button onMouseEnter={()=>{
//           setNum(num+1)
//         }}
//         onMouseLeave={()=>{
//           setNum2(num2+10)
//         }}>click me</button>
    
//       </div>
//     </div>
//   )
// }

// export default App

const App = () => {
  const [a,setA]=useState(0)
  const [b,setB]=useState(1)

  const aChanging=()=>{
    console.log('a ki value change')
  }

  const bChanging=()=>{
    console.log("b ki value changing")
  }
  useEffect(function(){
    aChanging()
    console.log("useeffect is running")
  },[a])

  return (
    <div>
      <h1>value of a is {a}</h1>
      <h2>value of b is {b} </h2>
      <button onClick={()=>{
        setA(a+1)
      }}>increase a </button>

      <button onClick={()=>{
        setB(b-1)
      }}>decrease b</button>
    </div>
  )
}

export default App
