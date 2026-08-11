import React from 'react'
import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }


  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }



  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }}  className='flex flex-col items-start gap-4 p-10 lg:w-1/2'>
        
        <h1 className='text-4xl mb-2 font-bold'>Add notes</h1>

        {/* PEHLA INPUT FOR HEADING */}

        <input 
        type="text" 
        placeholder='enter notes heading...' 
        className='flex px-5 py-2 w-full border-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}

        />

      {/* DETAILED WALA INPUT */}

        <textarea 
        placeholder='write details'
        className='flex px-5 w-full py-2 h-50 border-2 rounded outline-none' 
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}/>

        <button className='bg-white w-full text-black px-5 py-2 rounded outline-none active:bg-red-500'>Add Notes</button>
        
      </form>
      <div className='flex lg:w-1/2 flex-wrap p-10 bg-gray-900 lg:border-l-2 '>
        <h1 className='text-4xl font-bold '>Recent notes:</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto items-start justify-start'>
          
           {task.map(function(elem,idx){
             return <div key={idx} className='flex justify-between flex-col relative h-52 bg-cover w-45 rounded-xl pt-9 px-4 text-black bg-[url(https://imgs.search.brave.com/LlQg4MMjT6dpVI13x64VuLgbfYZlUu_CU4GlTve3rT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/dGh1bWJfYmFjay9m/aDI2MC9iYWNrZ3Jv/dW5kLzIwMjMwOTI3/L3BuZ3RyZWUtYS1u/b3RlLWNhcmQtdGVt/cGxhdGUtbWFkZS1m/cm9tLWEtcHVycGxl/LXBhZ2Utd2l0aC1y/YWluYm93LWltYWdl/XzEzMzY5MDc3Lmpw/Zw)]'>
              
              <div>
                <h3 className='px-4 py-2 leading-tight text-xl font-bold '>{elem.title}</h3>
                <p className='mt-2 p-3 leading-tight font-small text-gray-700'>{elem.details}</p>
              </div> 
              <button onClick={()=>{
                deleteNote(idx)
              }}
              className='bg-white w-full cursor-pointer active:scale-75 rounded-2xl p-2 text-xs font-bold mb-2'>delete</button>
             </div>
             
           })}
          
        </div>
        </div>
      </div>
  )
}

export default App


```js
// =============================
// REACT NOTES APP - SHORT NOTES
// =============================

// useState React ka hook hai.
// Iska use data ko store aur update karne ke liye hota hai.

// title = note ka heading store karega
// setTitle = title ko update karega
const [title, setTitle] = useState('')

// details = note ki details store karega
// setDetails = details ko update karega
const [details, setDetails] = useState('')

// task = saare notes ko array ke andar store karega
// setTask = task array ko update karega
const [task, setTask] = useState([])


// =============================
// SUBMIT / ADD NOTE
// =============================

// Form submit hone par ye function chalega
const submitHandler = (e) => {

  // Form submit hone par page reload hone se rokta hai
  e.preventDefault()

  // task array ki copy banate hain
  const copyTask = [...task]

  // New note ko array mein add karte hain
  copyTask.push({ title, details })

  // Updated array ko state mein set karte hain
  setTask(copyTask)

  // Note add hone ke baad input fields empty karte hain
  setTitle('')
  setDetails('')
}


// =============================
// DELETE NOTE
// =============================

// idx = jis note ko delete karna hai uska index
const deleteNote = (idx) => {

  // task array ki copy banate hain
  const copyTask = [...task]

  // splice(index, 1) = given index se 1 item delete
  copyTask.splice(idx, 1)

  // Updated array ko state mein set karte hain
  setTask(copyTask)
}


// =============================
// INPUT
// =============================

// value={title}
// Input ki value title state se connected hai.

// onChange
// User input mein kuch type kare to ye function chalega.

// e.target.value
// Input ke andar currently jo text hai, woh deta hai.


// =============================
// TEXTAREA
// =============================

// details state textarea ki value ko store karti hai.
// setDetails() textarea ki value ko update karta hai.


// =============================
// MAP
// =============================

// map() array ke har item par loop chalata hai.
// Har note ko screen par display karne ke liye use kiya hai.

task.map((elem, idx) => {

  // elem = current note
  // idx = current note ka index

  // elem.title = note ka heading
  // elem.details = note ki details
})


// =============================
// DELETE BUTTON
// =============================

// Delete button click hone par:
// deleteNote(idx) call hota hai.

// idx ke according particular note delete hota hai.


// =============================
// IMPORTANT REACT CONCEPTS
// =============================

// useState()  -> data store/update karna
// setTitle()  -> title update karna
// setDetails() -> details update karna
// setTask()   -> notes array update karna
// onChange   -> input change detect karna
// onSubmit   -> form submit detect karna
// map()      -> array ke items ko UI mein dikhana
// push()     -> array mein new item add karna
// splice()   -> array se item delete karna
// spread (...) -> array ki copy banana
// e.preventDefault() -> page reload hone se rokna


// =============================
// APP KA SIMPLE FLOW
// =============================

// 1. User title enter karta hai
// 2. User details enter karta hai
// 3. Add Notes button click karta hai
// 4. submitHandler() call hota hai
// 5. New note task array mein add hota hai
// 6. setTask() UI ko update karta hai
// 7. map() saare notes ko screen par dikhata hai
// 8. Delete button se selected note remove hota hai
```
