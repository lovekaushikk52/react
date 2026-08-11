import React from 'react'

const App = () => {
  const formHandler=(e)=>{
    e.preventDefault() //form default behavior is to reload aa page so we make a function and passed form handler in that later passed e and applied prevent default on tht
   console.log("form submitted successfully") 
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input type="text" placeholder='enter ur name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
