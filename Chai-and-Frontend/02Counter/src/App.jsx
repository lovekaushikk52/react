import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter,setCounter]=useState(15)
  // let counter=5;

  const addValue=()=>{
    console.log("Clicked",counter)
    // counter=counter+1;
    setCounter(counter+1)
  }

  const subValue=()=>{
    console.log("clicked2",counter)
    // counter=counter-1
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter value:{counter}</h2>

      <button 
      onClick={addValue}>Add value
      </button>

      <br />

      <button 
      onClick={subValue}>Decrease value
      </button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
