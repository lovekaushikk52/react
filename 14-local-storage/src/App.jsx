//local storage is the memory of our browser where we can store small amount of data it will stay lifetime until u delete it urself

//session storage will stay until my current session is running means until browser is open

//we have to store the value in localStorage in the form of string so when we store an object we have to convert it into string using json.stringify method and when we have to retrieve it again into original form we will use json.parse

import { User } from 'lucide-react'
import React from 'react'

// localStorage.clear()
// sessionStorage.clear()
localStorage.setItem('user','sarthak')
const a=localStorage.getItem('user')
console.log(a)

localStorage.removeItem('user')

const App = () => {
  return (
    <div>
      app
    </div>
  )
}

export default App
