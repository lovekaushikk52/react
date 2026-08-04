import React from 'react'
//rafce shortcut
const App = () => {
  return (
    <> 
      <div id="parent">
      <h1 id="child1">App</h1>
      <h3 id="child2">ramlal</h3>
      {/* we can pass multiple values inside div but cant return multiple values in an function */}
    </div>
    <div id="chacha"></div>
    </> //wrapper or fragments : empty tags used to store mutiple divs
  )
}

export default App

//npm create vite used to create a folder
