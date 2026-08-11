//When the user changes something in the form, the React variable updates — and when the React variable changes, the form field updates too.


import React from 'react'
import { useState } from 'react'

const App = () => {

const [text,setText]=useState('')

  const formHandler=(e)=>{
    e.preventDefault() //form default behavior is to reload aa page so we make a function and passed form handler in that later passed e and applied prevent default on tht
   console.log("form submitted by",text)
   
   setText('')//form will not submit coz of prevent default but we changed seTitle value int empty so the value will also be empty
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input type="text" 
        placeholder='enter ur name'
        value={text}
        onChange={(e)=>{
          setText(e.target.value) // we will get what we write in console
        }}
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
