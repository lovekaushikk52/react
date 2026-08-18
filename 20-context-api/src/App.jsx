import React, { useState } from 'react'
import Naavbar from './components/Naavbar'
import Button from './components/Button'
const App = () => {
  return (
    <div>
      <Naavbar>
        <h2>this is navbar</h2>
        <h2>this is navbar 2</h2>
      </Naavbar>
      <Button/>
    </div>
  )
}

export default App
