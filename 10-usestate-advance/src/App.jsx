import React, { useState } from 'react'

const App = () => {
// const [num,setNum]=useState({user:'love',age:21})
const [num,setNum]=useState([10,20,30])

const btnclicked=()=>{

// const newNum={...num} //destructuring of object
// //in case of array we do destructuring in the [] brackets
// newNum.user="ramlal"
// newNum.age=41
// setNum(newNum)

const newNum=[...num]
newNum.push(99)
setNum(newNum)
}

  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}

      <h1>{num}</h1>
      <button onClick={btnclicked}>click me</button>
    </div>
  )
}

export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)

//   const btnClicked = () => {
//     setNum(prev => (prev + 1))
//     setNum(prev => (prev + 1))
//     setNum(prev => (prev + 1))
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App
