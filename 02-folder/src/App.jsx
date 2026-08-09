import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <Card/>
      {/* <Card/> */}
      <Navbar/>

    </div>
  )
}

export default App




// const App = () => {
//   const user="LOVE SHARMA";
//   const age=21;
//   return (
//     <div>
//         <div className='card'>
//           <h1>HELLO GUYS MY NAME IS {user}</h1><br />
//           <h2>MY AGE IS {age} </h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//         </div>
//         {/* {Card()}  */}
//         {/* using card */}
//     </div>
//   )
// }