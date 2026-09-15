import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  //create state
  //manage state
  //change state
  //sabhi child mai sync krwa dunga state ko

  const [name,setName]=useState("")

  return (
    <div>
      <Card title="card1" name={name} setName={setName} />
      <Card title="card2" name={name} setName={setName} />
      {/* <p>this is parent:{name} </p> */}
    </div>
  )
}

export default App
